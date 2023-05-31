import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RecordState } from './types';

const initialState: RecordState = {
    isLoading: false,
    isLoadingError: '',
    src: '',
};

const recordSlice = createSlice({
    name: 'texts',
    initialState,
    reducers: {
        fetchingRecord(state) {
            state.isLoading = true;
        },
        fetchSuccessRecord(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.src = action.payload;
        },
        fetchErrorRecord(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isLoadingError = action.payload;
        },
        resetSrc(state) {
            state.src = '';
        },
    },
});

export const { fetchingRecord, fetchSuccessRecord, fetchErrorRecord, resetSrc } = recordSlice.actions;

export const recordReducer = recordSlice.reducer;
