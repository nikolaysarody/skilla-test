import { AxiosPromise } from 'axios';
import { CallsInterface } from '../model/types';
import { apiInstance } from './base';

const BASE_URL = '/getList';

export type CallsParams = {
    date_start: string;
    date_end: string;
};

export const getCalls = (params?: CallsParams): AxiosPromise<CallsInterface> => {
    return apiInstance.post(BASE_URL, {}, { params });
};
