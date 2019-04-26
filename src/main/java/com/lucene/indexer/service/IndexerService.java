package com.lucene.indexer.service;

import com.lucene.indexer.util.SimplePagination;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.document.*;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.*;
import org.apache.lucene.search.similarities.Similarity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class IndexerService {

    public static final String TEXT = "text";
    public static final String RANK = "rank";
    public static final String ID = "id";

    @Autowired
    IndexWriter indexWriter;

    @Autowired
    SearcherManager searcherManager;

    @Autowired
    Analyzer analyzer;

    @Autowired
    FieldType fieldTemplate;

    @Autowired
    Similarity similarity;

    public Document createDoc(com.lucene.document.domain.Document document) {
        Document doc = new Document();

        doc.add(new Field(TEXT, document.getText(), fieldTemplate));
        doc.add(new Field(ID, document.getId().toString(), fieldTemplate));

        return doc;
    }

    public void addDoc(com.lucene.document.domain.Document document) throws IOException {
        indexWriter.addDocument(createDoc(document));
        searcherManager.maybeRefresh();
    }

    public void deleteDoc(Long id) throws IOException, ParseException {
        Term idTerm = new Term(ID, id.toString());

        indexWriter.deleteDocuments(idTerm);
        searcherManager.maybeRefresh();
    }


    public void updateDoc(com.lucene.document.domain.Document document) throws IOException, ParseException {
        Document newDoc = createDoc(document);

        Term idTerm = new Term(ID, document.getId().toString());
        indexWriter.updateDocument(idTerm, newDoc);
    }

    public List<Document> findDocument(String queryString, int offset, int limit) throws IOException, ParseException {
        IndexSearcher searcher = searcherManager.acquire();
        searcher.setSimilarity(similarity);

        Query query = new QueryParser(TEXT, analyzer).parse(queryString);
        ScoreDoc[] scores = searcher.search(query, offset + limit).scoreDocs;

        List<Document> docs = Arrays.stream(scores).skip(offset).limit(limit).map(x -> {
            try {
                Document document = searcher.doc(x.doc);
                document.add(new StringField(RANK,String.valueOf(x.score), Field.Store.NO));
                return document;
            } catch (IOException e) {
                e.printStackTrace();
            }
            return null;
        }).filter(Objects::nonNull).collect(Collectors.toList());
        
        searcherManager.release(searcher);

        return docs;

    }


}
