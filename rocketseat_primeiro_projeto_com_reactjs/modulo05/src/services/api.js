import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Authorization: `Bearer fbcb02b419a4a6ed2689d74d0ca26a9e3ae38661` }
});

export default api;
