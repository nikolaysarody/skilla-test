import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import {
    CallsInterface,
    CallsState,
    FilterCalls,
    FilterEmployees,
    FilterErrors,
    FilterRates,
    FilterSources,
    FilterTypes,
    TypeTitles,
} from './types';

const initialState: CallsState = {
    isLoading: false,
    isLoadingError: '',
    dateRange: [
        dayjs(new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000)).format('YYYY-MM-DD'),
        dayjs(new Date()).format('YYYY-MM-DD'),
    ],
    selectedDateType: TypeTitles.days,
    filters: {
        FilterTypes: FilterTypes.all,
        FilterEmployees: FilterEmployees.all,
        FilterCalls: FilterCalls.all,
        FilterSources: FilterSources.all,
        FilterRates: FilterRates.all,
        FilterErrors: FilterErrors.all,
    },
    resetFilters: false,
    calls: {} as CallsInterface,
};

const callsSlice = createSlice({
    name: 'texts',
    initialState,
    reducers: {
        setDateRange(state, action: PayloadAction<[Date, Date]>) {
            state.dateRange = [
                dayjs(action.payload[0]).format('YYYY-MM-DD'),
                dayjs(action.payload[1]).format('YYYY-MM-DD'),
            ];
        },
        setDateType(state, action: PayloadAction<TypeTitles>) {
            state.selectedDateType = action.payload;
        },
        resetFilters(state) {
            state.resetFilters = true;
            state.filters = initialState.filters;
        },
        addFilterTypes(state, action: PayloadAction<FilterTypes>) {
            state.resetFilters = false;
            state.filters.FilterTypes = action.payload;
        },
        addFilterEmployees(state, action: PayloadAction<FilterEmployees>) {
            state.resetFilters = false;
            state.filters.FilterEmployees = action.payload;
        },
        addFilterCalls(state, action: PayloadAction<FilterCalls>) {
            state.resetFilters = false;
            state.filters.FilterCalls = action.payload;
        },
        addFilterSources(state, action: PayloadAction<FilterSources>) {
            state.resetFilters = false;
            state.filters.FilterSources = action.payload;
        },
        addFilterRates(state, action: PayloadAction<FilterRates>) {
            state.resetFilters = false;
            state.filters.FilterRates = action.payload;
        },
        addFilterErrors(state, action: PayloadAction<FilterErrors>) {
            state.resetFilters = false;
            state.filters.FilterErrors = action.payload;
        },
        fetchingCalls(state) {
            state.isLoading = true;
        },
        fetchSuccessCalls(state, action: PayloadAction<CallsInterface>) {
            state.isLoading = false;
            state.calls = action.payload;
        },
        fetchErrorCalls(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isLoadingError = action.payload;
        },
    },
});

export const {
    setDateRange,
    setDateType,
    resetFilters,
    addFilterTypes,
    addFilterEmployees,
    addFilterCalls,
    addFilterSources,
    addFilterRates,
    addFilterErrors,
    fetchingCalls,
    fetchSuccessCalls,
    fetchErrorCalls,
} = callsSlice.actions;

export const callsReducer = callsSlice.reducer;
