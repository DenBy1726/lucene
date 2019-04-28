import Base from './Base';

export default class DocumentApi extends Base {
  fetchDocumentsOnStart({ page, size }) {
    return this.apiClient.get(`/api/document/?page=${page}&size=${size}`);
  }

  fetchDocuments({ query, page, size }) {
    return this.apiClient.get(`/api/document/query=${query}?page=${page}&size=${size}`);
  }

  fetchDocument(id) {
    return this.apiClient.get(`/api/document/${id}`);
  }
}
