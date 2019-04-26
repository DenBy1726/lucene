package com.lucene.document.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain=true)
public class QueryIn {
    String query;
}
