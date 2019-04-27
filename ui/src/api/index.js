import DocumentApi from './Document';
import ApiClient from './ApiClient';

export default function ({ apiPrefix } = {}) {
  const api = new ApiClient({ prefix: apiPrefix });

  return {
    apiClient: api,
    document: new DocumentApi({ apiClient: api }),
  };
}