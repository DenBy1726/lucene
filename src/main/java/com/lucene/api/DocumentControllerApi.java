package com.lucene.api;

import com.lucene.api.util.ApiPageable;
import com.lucene.document.domain.Document;
import com.lucene.document.domain.DocumentIn;
import com.lucene.document.domain.QueryIn;
import com.lucene.document.domain.QueryOut;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;

@Api
@RequestMapping("/api/document")
public interface DocumentControllerApi {

    @ApiOperation("doc by id")
    @GetMapping("/{id}")
    Document getDocumentById(@PathVariable("id") Long id);

    @ApiOperation("doc page")
    @GetMapping("/")
    @ApiPageable
    Page<Document> getDocuments(Pageable pageable);

    @ApiOperation("doc save")
    @PostMapping("/")
    Document persistDocument(@RequestBody @Valid DocumentIn document) throws IOException, ParseException;

    @ApiOperation("doc delete")
    @DeleteMapping("/{id}")
    void deleteDocument(@PathVariable("id") Long id) throws IOException, ParseException;

    @ApiOperation("find relevant")
    @GetMapping("/query={query}")
    @ApiPageable
    Page<QueryOut> findDocuments(@PathVariable("query") QueryIn searchIn, Pageable pageable) throws IOException, ParseException;

}
