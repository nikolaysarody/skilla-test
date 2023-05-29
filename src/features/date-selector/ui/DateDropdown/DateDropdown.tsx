import React, { FC, useEffect, useState } from 'react';
import { DateDropdownBtn } from '../DateDropdownBtn/DateDropdownBtn';
import { TypeTitles } from '../../lib/types';
import styles from './DateDropdown.module.scss';

interface DateDropdownProps {
    setTitle: (title: TypeTitles) => void;
}

export const DateDropdown: FC<DateDropdownProps> = ({ setTitle }) => {
    const [time, setTime] = useState<Date>(new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000));
    const [selectedType, setSelectedType] = useState<TypeTitles>(TypeTitles.days);

    useEffect(() => {
        setTitle(selectedType);
        let date = new Date().getTime();
        switch (selectedType) {
            case TypeTitles.days: {
                date -= 3 * 24 * 60 * 60 * 1000;
                break;
            }
            case TypeTitles.week: {
                date -= 7 * 24 * 60 * 60 * 1000;
                break;
            }
            case TypeTitles.month: {
                date -= 30 * 24 * 60 * 60 * 1000;
                break;
            }
            case TypeTitles.year: {
                date -= 365 * 24 * 60 * 60 * 1000;
                break;
            }
            default:
                break;
        }
        setTime(new Date(date));
    }, [setTitle, selectedType]);

    return (
        <div className={styles.dropdown}>
            <DateDropdownBtn
                type={TypeTitles.days}
                selected={selectedType === TypeTitles.days}
                value={setSelectedType}
                key="days"
            />
            <DateDropdownBtn
                type={TypeTitles.week}
                selected={selectedType === TypeTitles.week}
                value={setSelectedType}
                key="week"
            />
            <DateDropdownBtn
                type={TypeTitles.month}
                selected={selectedType === TypeTitles.month}
                value={setSelectedType}
                key="month"
            />
            <DateDropdownBtn
                type={TypeTitles.year}
                selected={selectedType === TypeTitles.year}
                value={setSelectedType}
                key="year"
            />
            <DateDropdownBtn
                type={TypeTitles.customDate}
                selected={selectedType === TypeTitles.customDate}
                value={setSelectedType}
                key="customDate"
            />
        </div>
    );
};
