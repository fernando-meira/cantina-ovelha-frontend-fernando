import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4747',
});

export default api;
