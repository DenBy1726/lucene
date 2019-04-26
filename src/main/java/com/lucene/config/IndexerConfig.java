package com.lucene.config;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.ru.RussianAnalyzer;
import org.apache.lucene.document.FieldType;
import org.apache.lucene.index.IndexOptions;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.search.ControlledRealTimeReopenThread;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.SearcherManager;
import org.apache.lucene.search.similarities.ClassicSimilarity;
import org.apache.lucene.search.similarities.Similarity;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.RAMDirectory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

@Configuration
public class IndexerConfig {

    private static final String THREAD_NAME = "NRT Reopen Thread";
    
    @Bean
    public Similarity getSimilarity() {
        return new ClassicSimilarity();
    }
    
    @Bean
    public FieldType getFieldType() {
        FieldType fieldType = new FieldType();
        fieldType.setStored(true);
        fieldType.setIndexOptions(IndexOptions.DOCS_AND_FREQS_AND_POSITIONS_AND_OFFSETS);
        fieldType.setTokenized(true);
        fieldType.setStoreTermVectors(true);
        fieldType.setStoreTermVectorOffsets(true);
        fieldType.setStoreTermVectorPayloads(true);
        fieldType.setStoreTermVectorPositions(true);
        return fieldType;
    }

    @Bean
    public Directory getDirectory() {
        return new RAMDirectory();
    }

    @Bean
    public Analyzer getAnalyzer() {
        return new RussianAnalyzer();
    }

    @Bean
    public IndexWriterConfig getIndexWriterConfig(Analyzer analyzer) {
        return new IndexWriterConfig(analyzer);
    }

    @Bean
    public IndexWriter getWriter(Directory directory, IndexWriterConfig indexWriterConfig) throws IOException {
        return new IndexWriter(directory, indexWriterConfig);
    }

    @Bean
    public SearcherManager getSearchManager(IndexWriter indexWriter) throws IOException {
        return new SearcherManager(indexWriter, true, true, null);
    }

    @Bean
    public ControlledRealTimeReopenThread<IndexSearcher> getNrtReopenThread(IndexWriter indexWriter, SearcherManager searcherManager) {
        ControlledRealTimeReopenThread<IndexSearcher> nrtReopenThread = new ControlledRealTimeReopenThread<>(
            indexWriter, searcherManager, 1.0, 0.1);
        nrtReopenThread.setName(THREAD_NAME);
        return nrtReopenThread;
    }

}
