import axios from 'axios';

const api = axios.create({
  baseURL: 'https://worthy-excellence-48663b98d6.strapiapp.com/api',
});

export default api;