import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api;

// http://162.243.144.62:4747/restaurants
