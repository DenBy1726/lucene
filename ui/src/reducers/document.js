import {
    FETCH_DOCUMENTS_START,
    FETCH_DOCUMENTS_SUCCESS,
    FETCH_DOCUMENTS_FAIL,
    FETCH_DOCUMENT_START,
    FETCH_DOCUMENT_SUCCESS,
    FETCH_DOCUMENT_FAIL,
    // CLEAR_CURRENT_STATE,
    // CLEAR_ITEMS_STATE
  } from '../actions/document';
  
  const initialState = {
    loading: false,
    loadingFailed: false,
    items: [],
    currentItem: {},
    page: 1,
    size: 250,
    total: 0,
  } 
  
  function document(state = initialState, { type, data }) {
    switch (type) {
      case FETCH_DOCUMENTS_START:
        return {
          ...state,
          loading: true,
          loadingFailed: false
        };
      case FETCH_DOCUMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: data.content,
          size: data.size,
          total: data.totalPages,
          page: data.number,
        };
      case FETCH_DOCUMENTS_FAIL:
        return {
          ...state,
          loading: false,
          loadingFailed: true
        };
      case FETCH_DOCUMENT_START:
        return {
          ...state,
          loading: true,
          loadingFailed: false
        };
      case FETCH_DOCUMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          currentItem: data.news,
        };
      case FETCH_DOCUMENT_FAIL:
        return {
          ...state,
          loading: false,
          loadingFailed: true,
        };
    //   case CLEAR_CURRENT_STATE:
    //     return {
    //       ...state,
    //       prevItem: {},
    //       currentItem: {},
    //       nextItem: {}
    //     }
    //   case CLEAR_ITEMS_STATE:
    //     return {
    //       ...state,
    //       items: []
    //     }
      default:
        return state;
    }
  }
  
  export default document;