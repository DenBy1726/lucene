// import Promise from 'bluebird';

export default class ApiClient {
  constructor({ prefix = 'api' } = {}) {
    this.prefix = prefix;
  }

  get(requestUrl, payload = {}, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'get',
      body: payload,
      params
    });
  }

  put(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'put',
      body: payload
    });
  }

  patch(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'PATCH',
      body: payload
    });
  }

  post(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'post',
      body: payload
    });
  }

  delete(requestUrl, payload = {}) {
      return this.request({
        url: requestUrl,
        method: 'delete',
        body: payload
      });
  }

  request({ url, method, body }) {
    let status, init;

    init = { 
      method,
      // mode: 'no-cors',
      headers: {
        Accept: '*/*',
        // Accept: 'application/json'
      }
    }
    if(method !== 'get') {
      init = {
        ...init,
        headers: {
          ...init.headers,
          'Content-Type': 'application/json'
        }
      }
    }


    if (method !== 'get' && method !== 'head') {
      init.body = JSON.stringify(body);
    }
    console.log(`${this.prefix}/${url}`, init)

    return fetch(url, init).then(res => {
      status = res.status;
      if (status === 204) {
        return status;
      }

      return res.json();
    }).then(data => {
      if (status >= 400 && status !== 422) {
        if (status === 404) {
          const error = new Error('Couldn’t find this page.');
          error.status = status;
          throw error;
        }
        if (data.message) {
          throw new Error(data.message);
        }
        throw new Error('Bad response from server');
      }

      // 204 No Content --> return status
      if (status === 204) {
        return status;
      }
      if (status === 422) {
        const error = new Error('Unprocessable Entity.');
        error.status = status;
        throw error;
      }
      if (data) {
        return data;
      }

      return Promise.reject(data.error);
    });
  }
}