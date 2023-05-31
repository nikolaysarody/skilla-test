import React from 'react';
import { CallsSearch } from '../../../features/calls-search/ui/CallsSearch';
import { Dropdown } from '../../../shared/ui/Dropdown/ui/Dropdown/Dropdown';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks';
import {
    addFilterCalls,
    addFilterEmployees,
    addFilterErrors,
    addFilterRates,
    addFilterSources,
    addFilterTypes,
    resetFilters,
} from '../../../entities/header/model';
import {
    FilterCalls,
    FilterEmployees,
    FilterErrors,
    FilterRates,
    FilterSources,
    FilterTypes,
} from '../../../entities/header/model/types';
import { PUBLIC_FOLDER } from '../../../shared/lib/helpers';
import styles from './Search.module.scss';

export const Search = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.calls.filters);
    const dropdowns = [
        [
            {
                title: 'Все типы',
                action: () => {
                    dispatch(addFilterTypes(FilterTypes.all));
                },
            },
            {
                title: 'Входящие',
                action: () => {
                    dispatch(addFilterTypes(FilterTypes.incoming));
                },
            },
            {
                title: 'Исходящие',
                action: () => {
                    dispatch(addFilterTypes(FilterTypes.outgoing));
                },
            },
        ],
        [
            {
                title: 'Все сотрудники',
                action: () => {
                    dispatch(addFilterEmployees(FilterEmployees.all));
                },
            },
            {
                title: 'Константин К.',
                action: () => {
                    dispatch(addFilterEmployees(FilterEmployees.some));
                },
            },
            {
                title: 'Полина З.',
                action: () => {
                    dispatch(addFilterEmployees(FilterEmployees.some));
                },
            },
        ],
        [
            {
                title: 'Все звонки',
                action: () => {
                    dispatch(addFilterCalls(FilterCalls.all));
                },
            },
            {
                title: 'Все клиенты',
                action: () => {
                    dispatch(addFilterCalls(FilterCalls.some));
                },
            },
            {
                title: 'Новые клиенты',
                action: () => {
                    dispatch(addFilterCalls(FilterCalls.some));
                },
            },
            {
                title: 'Все исполнители',
                action: () => {
                    dispatch(addFilterCalls(FilterCalls.some));
                },
            },
            {
                title: 'Через приложение',
                action: () => {
                    dispatch(addFilterCalls(FilterCalls.some));
                },
            },
            {
                title: 'Прочие звонки',
                action: () => {
                    dispatch(addFilterCalls(FilterCalls.some));
                },
            },
        ],
        [
            {
                title: 'Все источники',
                action: () => {
                    dispatch(addFilterSources(FilterSources.all));
                },
            },
            {
                title: 'Источник 1',
                action: () => {
                    dispatch(addFilterSources(FilterSources.some));
                },
            },
            {
                title: 'Источник 2',
                action: () => {
                    dispatch(addFilterSources(FilterSources.some));
                },
            },
        ],
        [
            {
                title: 'Все оценки',
                action: () => {
                    dispatch(addFilterRates(FilterRates.all));
                },
            },
            {
                title: 'Распознать',
                action: () => {
                    dispatch(addFilterRates(FilterRates.some));
                },
            },
            {
                title: 'Скрипт не использован',
                action: () => {
                    dispatch(addFilterRates(FilterRates.some));
                },
            },
        ],
        [
            {
                title: 'Все ошибки',
                action: () => {
                    dispatch(addFilterErrors(FilterErrors.all));
                },
            },
            {
                title: 'Приветствие',
                action: () => {
                    dispatch(addFilterErrors(FilterErrors.some));
                },
            },
            {
                title: 'Имя',
                action: () => {
                    dispatch(addFilterErrors(FilterErrors.some));
                },
            },
            {
                title: 'Цена',
                action: () => {
                    dispatch(addFilterErrors(FilterErrors.some));
                },
            },
            {
                title: 'Скидка',
                action: () => {
                    dispatch(addFilterErrors(FilterErrors.some));
                },
            },
            {
                title: 'Предзаказ',
                action: () => {
                    dispatch(addFilterErrors(FilterErrors.some));
                },
            },
            {
                title: 'Благодарность',
                action: () => {
                    dispatch(addFilterErrors(FilterErrors.some));
                },
            },
            {
                title: 'Стоп слова',
                action: () => {
                    dispatch(addFilterErrors(FilterErrors.some));
                },
            },
        ],
    ];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <CallsSearch />
                <div className={styles.dropdowns}>
                    {Object.entries(filters).some((item) => item[1] !== 'all') ? (
                        <button type="button" className={styles.reset} onClick={() => dispatch(resetFilters())}>
                            <span className={styles.text}>Сбросить фильтры</span>
                            <img className={styles.icon} src={`${PUBLIC_FOLDER}/icons/close.svg`} alt="Close" />
                        </button>
                    ) : null}
                    {dropdowns.map((item, index) => (
                        <Dropdown buttons={item} key={`${item[0]}_${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};
