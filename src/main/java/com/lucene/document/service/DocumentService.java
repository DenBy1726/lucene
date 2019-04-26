package com.lucene.document.service;

import com.lucene.document.dao.DocumentDAO;
import com.lucene.document.domain.Document;
import com.lucene.document.domain.QueryOut;
import com.lucene.indexer.service.IndexerService;
import com.lucene.indexer.util.SimplePagination;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DocumentService {

    @Autowired
    DocumentDAO documentDAO;

    @Autowired
    IndexerService indexerService;

    @PostConstruct
    public void init() {
        getDocuments(Pageable.unpaged()).forEach(x -> {
            try {
                indexerService.addDoc(x);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    public Document getDocumentById(Long id) {
        return documentDAO.findById(id).orElse(null);
    }

    public Page<Document> getDocuments(Pageable pageable) {
        return documentDAO.findAll(pageable);
    }

    @Transactional
    public Document persistDocument(Document document) throws IOException, ParseException {
        boolean isNew = document.getId() != null;
        document = documentDAO.save(document);
        if (isNew)
            indexerService.addDoc(document);
        else
            indexerService.updateDoc(document);
        return document;
    }

    @Transactional
    public void deleteDocument(Long id) throws IOException, ParseException {
        documentDAO.deleteById(id);
        indexerService.deleteDoc(id);
    }

    public Page<QueryOut> findDocuments(String query, Pageable pageable) throws IOException, ParseException {
        List<org.apache.lucene.document.Document> pages = indexerService.findDocument(query, (int) pageable.getOffset(), pageable.getPageSize());
        List<QueryOut> documents = pages.stream().map(x -> {
            Document document = getDocumentById(Long.valueOf(x.get(IndexerService.ID)));
            double rank = Double.parseDouble(x.get(IndexerService.RANK));
            return new QueryOut().setDocument(document).setRank(rank);
        }).collect(Collectors.toList());
        return new PageImpl<>(documents, new SimplePagination((int)pageable.getOffset(),pageable.getPageSize()), pages.size());
    }

}
