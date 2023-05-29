import React, { FC } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { TypeTitles } from '../../lib/types';
import styles from './DateDropdownCalendar.module.scss';

interface DateDropdownCalendarProps {
    type: TypeTitles;
    selected: boolean;
    value: (item: TypeTitles) => void;
}

export const DateDropdownCalendar: FC<DateDropdownCalendarProps> = ({ type, selected, value }) => {
    return (
        <button className={styles.btn} type="button" onClick={() => value(type)}>
            <span className={classNames(styles.text, {}, [selected ? styles.selected : ''])}>{type}</span>
        </button>
    );
};
