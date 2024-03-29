import React, { useEffect, useMemo } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { TableHeader } from '../../../features/calls-table/ui/table-header/TableHeader';
import { fetchCalls } from '../../../entities/header/model/action';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks';
import { TableRow } from '../../../features/calls-table/ui/table-row/ui/TableRow';
import { FilterTypes } from '../../../entities/header/model/types';
import styles from './CallsTable.module.scss';

export const CallsTable = () => {
    const dispatch = useAppDispatch();
    const calls = useAppSelector((state) => state.calls.calls);
    const loading = useAppSelector((state) => state.calls.isLoading);
    const dateRange = useAppSelector((state) => state.calls.dateRange);
    const filters = useAppSelector((state) => state.calls.filters);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const sortedCalls = useMemo(() => {
        if (calls.results) {
            return calls.results.filter((item) => {
                if (filters.FilterTypes === FilterTypes.all) {
                    return true;
                }
                return item.in_out === filters.FilterTypes;
            });
        }
        return [];
    }, [filters.FilterTypes, calls]);

    useEffect(() => {
        dispatch(fetchCalls({ date_start: dateRange[0], date_end: dateRange[1] }));
    }, [dispatch, dateRange]);

    if (loading) {
        return <Spin indicator={antIcon} />;
    }

    return (
        <div className={styles.container}>
            <TableHeader />
            <div className={styles.wrapper}>
                {calls.results
                    ? sortedCalls.map((item) => (
                          <TableRow
                              type={[item.in_out, item.status]}
                              time={item.date}
                              employee={item.person_avatar}
                              isWeb={item.from_site}
                              call={item.partner_data.phone}
                              // Источников в основном нет, поэтому поле будет пустым
                              // Для теста можно отправить какую нибудь строку
                              source={item.source}
                              rate={item.errors}
                              duration={item.time}
                              record={item.record}
                              partnership_id={item.partnership_id}
                              key={item.id}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
};
