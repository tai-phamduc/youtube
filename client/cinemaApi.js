import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cinema-server-mongodb.vercel.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
