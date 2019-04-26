package com.lucene.converter;

import com.lucene.document.domain.QueryIn;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.Nullable;

public class StringToQueryConverter implements Converter<String, QueryIn> {
    @Nullable
    @Override
    public QueryIn convert(String s) {
        return new QueryIn().setQuery(s);
    }
}
