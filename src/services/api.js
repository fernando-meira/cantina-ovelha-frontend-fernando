import axios from 'axios';

const api = axios.create({
  baseURL: 'http://162.243.144.62:4747/',
});

export default api;
