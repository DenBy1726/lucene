package com.lucene.indexer.util;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class SimplePagination implements Pageable {

    private int offset;
    private int limit;

    public SimplePagination(int offset, int limit) {
        this.offset = offset;
        this.limit = limit;
    }

    @Override
    public int getPageNumber() {
        return offset / limit;
    }

    @Override
    public int getPageSize() {
        return limit;
    }

    @Override
    public long getOffset() {
        return offset;
    }

    @Override
    public Sort getSort() {
        return null;
    }

    @Override
    public Pageable next() {
        return null;
    }

    @Override
    public Pageable previousOrFirst() {
        return null;
    }

    @Override
    public Pageable first() {
        return null;
    }

    @Override
    public boolean hasPrevious() {
        return false;
    }
}
