import axios from 'axios';

const axoiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export function addTokenJwtToAxiosInstance(token: string) {
  axoiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeTokenJwtToAxiosInstance() {
  axoiosInstance.defaults.headers.common.Accept = '';
}

export function weatherAxiosInstance() {
  return axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export default axoiosInstance;
