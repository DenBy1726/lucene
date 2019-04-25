package com.lucene.document.controller;

import com.lucene.api.DocumentControllerApi;
import com.lucene.document.Mapper;
import com.lucene.document.domain.Document;
import com.lucene.document.domain.DocumentIn;
import com.lucene.document.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RestController;

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
    public Document persistDocument(DocumentIn documentIn) {
        return documentService.persistDocument(Mapper.fromIn(documentIn));
    }

    @Override
    public void deleteDocument(Long id) {
        documentService.deleteDocument(id);
    }
}
