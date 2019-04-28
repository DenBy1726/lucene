import api from '../config';

export const FETCH_DOCUMENTS_START = 'FETCH_DOCUMENTS_START';
export const FETCH_DOCUMENTS_SUCCESS = 'FETCH_DOCUMENTS_SUCCESS';
export const FETCH_DOCUMENTS_FAIL = 'FETCH_DOCUMENTS_FAIL';

export function fetchDocuments(value) {
  return dispatch => {
    dispatch({ type: FETCH_DOCUMENTS_START });
    return api.document.fetchDocuments(value)
      .then(data => {
        const newData = {
          ...data,
          content: data.content.map(item => item.document),
          query: value.query
        };
        dispatch({ type: FETCH_DOCUMENTS_SUCCESS, data: newData});
      })
      .catch(() => dispatch({ type: FETCH_DOCUMENTS_FAIL }));
  };
}

export function fetchDocumentsOnStart(value) {
  return dispatch => {
    dispatch({ type: FETCH_DOCUMENTS_START });
    return api.document.fetchDocumentsOnStart(value)
      .then(data => dispatch({ type: FETCH_DOCUMENTS_SUCCESS, data }))
      .catch(() => dispatch({ type: FETCH_DOCUMENTS_FAIL }));
  };
}

export const FETCH_DOCUMENT_START = 'FETCH_DOCUMENT_START';
export const FETCH_DOCUMENT_SUCCESS = 'FETCH_DOCUMENT_SUCCESS';
export const FETCH_DOCUMENT_FAIL = 'FETCH_DOCUMENT_FAIL';

export function fetchDocument(id) {
  return dispatch => {
    dispatch({ type: FETCH_DOCUMENT_START });
    return api.document.fetchDocument(id)
      .then(data => dispatch({ type: FETCH_DOCUMENT_SUCCESS, data }))
      .catch((data) => dispatch({ type: FETCH_DOCUMENT_FAIL, data }));
  };
}

export const CLEAR_CURRENT_STATE = 'CLEAR_CURRENT_STATE';

export function clearCurrentState() {
  return dispatch => {
    dispatch({ type: CLEAR_CURRENT_STATE });
  };
}

// export const CLEAR_ITEMS_STATE = 'CLEAR_ITEMS_STATE';

// export function clearItemsState() {
//   return dispatch => {
//     dispatch({ type: CLEAR_ITEMS_STATE });
//   };
// }


