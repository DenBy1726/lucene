package com.lucene.document.dao;

import com.lucene.document.domain.Document;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentDAO extends PagingAndSortingRepository<Document,Long> {
}
