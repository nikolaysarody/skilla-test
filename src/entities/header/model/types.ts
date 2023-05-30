export interface CallsState {
    isLoading: boolean;
    isLoadingError: string;
    dateRange: [Date, Date];
    selectedDateType: TypeTitles;
    filters: Filters;
    resetFilters: boolean;
}

export interface Filters {
    FilterTypes: FilterTypes;
    FilterEmployees: FilterEmployees;
    FilterCalls: FilterCalls;
    FilterSources: FilterSources;
    FilterRates: FilterRates;
    FilterErrors: FilterErrors;
}

export enum FilterTypes {
    incoming = 'incoming',
    outgoing = 'outgoing',
    all = 'all',
}

export enum FilterEmployees {
    all = 'all',
    some = 'some',
}

export enum FilterCalls {
    all = 'all',
    some = 'some',
}

export enum FilterSources {
    all = 'all',
    some = 'some',
}

export enum FilterRates {
    all = 'all',
    some = 'some',
}

export enum FilterErrors {
    all = 'all',
    some = 'some',
}

export enum TypeTitles {
    days = '3 дня',
    week = 'Неделя',
    month = 'Месяц',
    year = 'Год',
    customDate = 'Указать даты',
}
