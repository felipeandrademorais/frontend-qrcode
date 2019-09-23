import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servidor-qrcode.herokuapp.com',
});

export default api;