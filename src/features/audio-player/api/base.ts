import axios from 'axios';
import { SKILLA_API_URL } from '../../../shared/config';

export const apiInstance = axios.create({
    baseURL: SKILLA_API_URL,
    responseType: 'arraybuffer',
    headers: {
        'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        'Content-Transfer-Encoding': 'binary',
        'Content-Disposition': 'filename="record.mp3"',
    },
});

apiInstance.interceptors.request.use((config) => {
    const newConfig = config;
    newConfig.headers.Authorization = 'Bearer testtoken';
    return newConfig;
});
