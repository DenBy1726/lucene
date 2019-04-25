package com.lucene.document.service;

import com.lucene.document.dao.DocumentDAO;
import com.lucene.document.domain.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DocumentService {
    
    @Autowired
    DocumentDAO documentDAO;

    public Document getDocumentById(Long id){
        return documentDAO.findById(id).orElse(null);
    }
    
    public Page<Document> getDocuments(Pageable pageable){
        return documentDAO.findAll(pageable);
    }
    
    public Document persistDocument(Document document){
        return documentDAO.save(document);
    }
    
    public void deleteDocument(Long id){
        documentDAO.deleteById(id);
    }
    
}
