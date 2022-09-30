import axios from 'axios';
import qs from 'qs';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: { 'Content-Type': 'application/json' }
});

API.interceptors.request.use(
  req => {
    req.paramsSerializer = params =>
      qs.stringify(params, { arrayFormat: 'repeat' });

    return req;
  },
  error => Promise.reject(error)
);

API.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export { API };
