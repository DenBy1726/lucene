import Base from './Base';

export default class DocumentApi extends Base {
  fetchDocuments({query, page, size}) {
    return this.apiClient.get(`document/query=${query}?pageNumber=${page}&pageSize=${size}`);
    // return this.apiClient.get(`document/query=${query}?page=${page}&size=${size}`);
  }

  fetchDocument(id) {
    return this.apiClient.get(`document/${id}`);
  }
}
