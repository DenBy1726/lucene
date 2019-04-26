package com.lucene.document.controller;

import com.lucene.api.DocumentControllerApi;
import com.lucene.document.Mapper;
import com.lucene.document.domain.Document;
import com.lucene.document.domain.DocumentIn;
import com.lucene.document.domain.QueryIn;
import com.lucene.document.domain.QueryOut;
import com.lucene.document.service.DocumentService;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class DocumentController implements DocumentControllerApi {

    @Autowired
    DocumentService documentService;

    @Override
    public Document getDocumentById(Long id) {
        return documentService.getDocumentById(id);
    }

    @Override
    public Page<Document> getDocuments(Pageable pageable) {
        return documentService.getDocuments(pageable);
    }

    @Override
    public Document persistDocument(DocumentIn documentIn) throws IOException, ParseException {
        return documentService.persistDocument(Mapper.fromIn(documentIn));
    }

    @Override
    public void deleteDocument(Long id) throws IOException, ParseException {
        documentService.deleteDocument(id);
    }

    @Override
    public Page<QueryOut> findDocuments(QueryIn searchIn, Pageable pageable) throws IOException, ParseException {
        return documentService.findDocuments(searchIn.getQuery(),pageable);
    }
}
