import { AxiosPromise } from 'axios';
import { apiInstance } from './base';

const BASE_URL = '/getRecord';

export type RecordParams = {
    record: string;
    partnership_id: string;
};

export const getCallRecord = (params?: RecordParams): AxiosPromise<BlobPart> => {
    return apiInstance.post(BASE_URL, {}, { params });
};
