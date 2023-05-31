import { isAxiosError } from 'axios';
import { AppDispatch } from '../../../app/store';
import { CallsParams, getCalls } from '../api';
import { fetchErrorCalls, fetchingCalls, fetchSuccessCalls } from './slice';

export const fetchCalls = (params: CallsParams) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingCalls());
            const res = await getCalls(params);
            dispatch(fetchSuccessCalls(res.data));
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchErrorCalls(e.response.data.message));
            }
        }
    };
};
