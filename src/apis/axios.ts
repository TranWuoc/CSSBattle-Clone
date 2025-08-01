import axios, { type AxiosInstance } from 'axios';

class Http {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:1337/api',
            timeout: 10000,
            headers: {
                'Content-Type ': 'application/json',
            },
        });
    }
}

const http = new Http().instance;

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
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
    },
);
