import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

const $host = axios.create({ baseURL: process.env.REACT_APP_API_URL });
const $authHost = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const authInterseptor = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "token"
  )}`;
  return config;
};

$authHost.interceptors.request.use(authInterseptor);

export { $host, $authHost };
