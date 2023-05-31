export interface CallsState {
    isLoading: boolean;
    isLoadingError: string;
    dateRange: [string, string];
    selectedDateType: TypeTitles;
    filters: FiltersInterface;
    resetFilters: boolean;
    calls: CallsInterface;
}

export interface CallsInterface {
    total_rows: string;
    results: OneCallInterface[];
}

export interface OneCallInterface {
    id: number;
    partnership_id: string;
    partner_data: ApiPartnerData;
    date: string;
    date_notime: string;
    time: number;
    from_number: string;
    from_extension: string;
    to_number: string;
    to_extension: string;
    is_skilla: number;
    status: string;
    record: string;
    line_number: string;
    in_out: number;
    from_site: number;
    source: string;
    errors: string[];
    disconnect_reason: string;
    results: ApiResults[];
    stages: ApiStages[];
    abuse: ApiAbuse;
    contact_name: string;
    contact_company: string;
    person_id: number;
    person_name: string;
    person_surname: string;
    person_avatar: string;
}

export interface ApiPartnerData {
    id: number;
    name: string;
    phone: number;
}

export interface ApiError {
    title: string;
}

export interface ApiResults {
    type: string;
    title: string;
    tooltip: string;
}

export interface ApiStages {
    person_name: string;
    person_surname: string;
    person_mango_phone: string;
    duration: string;
    disconnect_reason: string;
}

export interface ApiAbuse {
    date: string;
    person_name: string;
    message: string;
    support_read_status: number;
    support_answer_status: number;
    answers: ApiAbuseAnswer[];
}

export interface ApiAbuseAnswer {
    message: string;
    from_support: number;
    support_read_status: number;
    person_read_status: number;
}

export interface FiltersInterface {
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
