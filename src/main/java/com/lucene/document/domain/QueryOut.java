package com.lucene.document.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class QueryOut {
    Document document;
    double rank;
}
