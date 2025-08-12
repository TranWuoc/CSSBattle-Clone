import axios, { type AxiosInstance } from 'axios';

class Http {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:8080',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

const http = new Http().instance;

http.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        console.error('Request Error', error);
        return Promise.reject('error');
    },
);

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Response error', error);
        return Promise.reject(error);
    },
);

export default http;
