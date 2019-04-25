package com.lucene.api;

import com.lucene.document.domain.Document;
import com.lucene.document.domain.DocumentIn;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Api
@RequestMapping("/document")
public interface DocumentControllerApi {

    @ApiOperation("doc by id")
    @GetMapping("/{id}")
    Document getDocumentById(@PathVariable("id") Long id);

    @ApiOperation("doc page")
    @GetMapping("/")
    Page<Document> getDocuments(Pageable pageable);

    @ApiOperation("doc save")
    @PostMapping("/")
    Document persistDocument(@RequestBody @Valid DocumentIn document);
    
    @ApiOperation("doc delete")
    @DeleteMapping("/{id}")
    void deleteDocument(@PathVariable("id") Long id);

}
