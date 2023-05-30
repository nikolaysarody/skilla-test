import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
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
    dateRange: [new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), new Date()],
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
};

const callsSlice = createSlice({
    name: 'texts',
    initialState,
    reducers: {
        setDateRange(state, action: PayloadAction<[Date, Date]>) {
            state.dateRange = action.payload;
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
} = callsSlice.actions;

export const callsReducer = callsSlice.reducer;
