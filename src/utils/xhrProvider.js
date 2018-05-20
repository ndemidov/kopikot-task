// Stub for XHR Provider, api inspired by axios.

import { API_ROOT } from '../constants/api';

// Give token.
const tokenStub = () => (
  new Promise((resolve) => (
    setTimeout(() => resolve({ token: 'abcd' }), 1500)
  ))
);

// Check token presence and return user fixture.
const userStub = ({ Authorization: token }) => (
  new Promise((resolve, reject) => {
    setTimeout(() => (
      token ? resolve({ name: 'Вася' }) : reject('Token is missing')
    ), 1500);
  })
);

// Manually route request.
const request = ({ url, method, headers }) => {
  if (url === `${API_ROOT}/api/token` && method === 'get') {
    return tokenStub(headers);
  }

  if (url === `${API_ROOT}/api/user` && method === 'get' ) {
    return userStub(headers);
  }

  return Promise.reject('404 Not Found');
};

const create = ({ baseURL }) => ({
  request: ({ url, ...rest }) => request({ url: `${baseURL}${url}`, ...rest }),
});

export default { create };
