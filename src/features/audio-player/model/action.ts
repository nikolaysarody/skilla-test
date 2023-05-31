import { isAxiosError } from 'axios';
import { AppDispatch } from '../../../app/store';
import { getCallRecord, RecordParams } from '../api';
import { fetchErrorRecord, fetchingRecord, fetchSuccessRecord } from './slice';

export const fetchCallRecord = (params: RecordParams) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingRecord());
            const res = await getCallRecord(params);
            const file = new File([res.data], 'record.mp3', {
                type: 'audio/mpeg3',
            });
            const url = URL.createObjectURL(file);
            dispatch(fetchSuccessRecord(url));
            return url;
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchErrorRecord(e.response.data.message));
            }
            return '';
        }
    };
};
