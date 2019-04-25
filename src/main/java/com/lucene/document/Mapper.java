package com.lucene.document;

import com.lucene.document.domain.Document;
import com.lucene.document.domain.DocumentIn;

import java.time.LocalDate;
import java.time.LocalTime;

public class Mapper {
    public static Document fromIn(DocumentIn documentIn) {
        return new Document()
            .setId(documentIn.getId())
            .setText(documentIn.getText())
            .setTitle(documentIn.getTitle())
            .setDate(LocalDate.now().toString())
            .setTime(LocalTime.now().toString());
    }
}
