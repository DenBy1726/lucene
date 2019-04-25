package com.lucene.document.service;

import com.lucene.document.dao.DocumentDAO;
import com.lucene.document.domain.Document;
import com.lucene.indexer.service.IndexerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;

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
                indexerService.addDocument(x);
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

    public Document persistDocument(Document document) throws IOException {
        indexerService.addDocument(document);
        indexerService.findDocument("Привет мир");
        return documentDAO.save(document);
    }

    public void deleteDocument(Long id) {
        documentDAO.deleteById(id);
    }

}
