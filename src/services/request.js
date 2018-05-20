import { API_ROOT } from '../constants/api';
import xhrProvider from '../utils/xhrProvider';

const request = config => xhrProvider.create({
  baseURL: API_ROOT,
})
  .request(config);

export const GET = (url, config) => request({
  ...config,
  url,
  method: 'get',
});

export const POST = (url, data, config) => request({
  ...config,
  url,
  method: 'post',
  data,
});

export const PATCH = (url, data, config) => request({
  ...config,
  url,
  method: 'patch',
  data,
});

export const DELETE = (url, config) => request({
  ...config,
  url,
  method: 'delete',
});

// Sign service with token.
export const sign = (service, token) => endpoint => (
  service(endpoint, {
    headers: { Authorization: `Bonusway token=${token}` }
  })
);

export default request;
