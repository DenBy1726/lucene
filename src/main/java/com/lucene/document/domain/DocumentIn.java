package com.lucene.document.domain;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class DocumentIn {
    Long id;
    @NotBlank
    String title;
    @NotBlank
    String text;
}
