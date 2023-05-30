import React, { FC } from 'react';
import { DateDropdownBtn } from '../DateDropdownBtn/DateDropdownBtn';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { useAppSelector } from '../../../../shared/lib/hooks';
import { TypeTitles } from '../../../../entities/header/model/types';
import styles from './DateDropdown.module.scss';

interface DateDropdownProps {
    hidden: boolean;
    statusSwitch: () => void;
}

export const DateDropdown: FC<DateDropdownProps> = ({ hidden, statusSwitch }) => {
    const title = useAppSelector((state) => state.calls.selectedDateType);

    return (
        <div className={classNames(styles.dropdown, {}, [hidden ? styles.hidden : ''])}>
            <DateDropdownBtn
                type={TypeTitles.days}
                selected={title === TypeTitles.days}
                key="days"
                statusSwitch={statusSwitch}
            />
            <DateDropdownBtn
                type={TypeTitles.week}
                selected={title === TypeTitles.week}
                key="week"
                statusSwitch={statusSwitch}
            />
            <DateDropdownBtn
                type={TypeTitles.month}
                selected={title === TypeTitles.month}
                key="month"
                statusSwitch={statusSwitch}
            />
            <DateDropdownBtn
                type={TypeTitles.year}
                selected={title === TypeTitles.year}
                key="year"
                statusSwitch={statusSwitch}
            />
            <DateDropdownBtn
                type={TypeTitles.customDate}
                selected={title === TypeTitles.customDate}
                key="customDate"
                statusSwitch={statusSwitch}
            />
        </div>
    );
};
