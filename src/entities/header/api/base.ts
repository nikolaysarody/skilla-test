import axios from 'axios';
import { SKILLA_API_URL } from '../../../shared/config';

export const apiInstance = axios.create({
    baseURL: SKILLA_API_URL,
});

apiInstance.interceptors.request.use((config) => {
    const newConfig = config;
    newConfig.headers.Authorization = 'Bearer testtoken';
    return newConfig;
});
