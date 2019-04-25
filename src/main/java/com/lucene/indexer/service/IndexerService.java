package com.lucene.indexer.service;

import com.lucene.document.service.DocumentService;
import org.apache.lucene.analysis.ru.RussianAnalyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.NumericDocValuesField;
import org.apache.lucene.document.StringField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.Term;
import org.apache.lucene.search.*;
import org.apache.lucene.store.RAMDirectory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;

@Service
public class IndexerService {

    private static final String THREAD_NAME = "NRT Reopen Thread";
    private static final String TIME = "time";
    private static final String TEXT = "text";
    private static final String ID = "id";


    private IndexWriter indexWriter;
    private ReferenceManager<IndexSearcher> searcherManager;

    @Autowired
    DocumentService documentService;

    @PostConstruct
    public void init() throws IOException {
        RussianAnalyzer analyzer = new RussianAnalyzer();
        RAMDirectory index = new RAMDirectory();

        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        indexWriter = new IndexWriter(index, config);

        searcherManager =
            new SearcherManager(indexWriter, true, true, null);
        ControlledRealTimeReopenThread<IndexSearcher> nrtReopenThread = new ControlledRealTimeReopenThread<>(
            indexWriter, searcherManager, 1.0, 0.1);
        nrtReopenThread.setName(THREAD_NAME);
    }

    public void addDocument(com.lucene.document.domain.Document document) throws IOException {
        Document doc = new Document();

        doc.add(new NumericDocValuesField(TIME, System.currentTimeMillis()));
        doc.add(new StringField(TEXT, document.getText(), Field.Store.YES));
        doc.add(new StringField(ID, document.getId().toString(), Field.Store.YES));

        indexWriter.addDocument(doc);
        searcherManager.maybeRefresh();
    }

    public void findDocument(String query) throws IOException {
        IndexSearcher searcher = searcherManager.acquire();
        Query q = new TermQuery(new Term(TEXT, query));
        TopDocs docs = searcher.search(q, 10);
        searcherManager.release(searcher);
    }
}
