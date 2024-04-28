import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import {BaseQueryFn} from '@reduxjs/toolkit/query';
import {API_BASE_URL, API_SUFFIX} from 'src/configs/key-configs';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/${API_SUFFIX}`, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers or configurations you need
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can modify the request config here, e.g., add authentication headers
    // config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response data here, e.g., handling pagination
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;

export const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: `${API_BASE_URL}/${API_SUFFIX}`},
  ): BaseQueryFn<{
    url: string;
    method: InternalAxiosRequestConfig['method'];
    data?: InternalAxiosRequestConfig['data'];
    params?: InternalAxiosRequestConfig['params'];
    headers?: InternalAxiosRequestConfig['headers'];
  }> =>
  async ({url, method, data, params, headers}) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return {data: result.data};
    } catch (error: any) {
      const err: Error | AxiosError = error;
      let status: string | number | undefined = '';
      let errorData: object | undefined;
      if (axios.isAxiosError(err)) {
        status = err.status;
        errorData = err.response?.data;
      } else {
        status = err.name;
        data = {
          message: err.message,
        };
      }
      return {
        error: {
          status,
          data: errorData,
        },
      };
    }
  };
