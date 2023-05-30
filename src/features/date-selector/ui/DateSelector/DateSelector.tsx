import React, { useState } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { OutsideWrapper } from '../../../../shared/ui/OutsideWrapper/ui/OutsideWrapper';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks';
import { setDateRange, setDateType } from '../../../../entities/header/model';
import { TypeTitles } from '../../../../entities/header/model/types';
import calcDate from '../../lib/helpers/calcDate';
import styles from './DateSelector.module.scss';

export const DateSelector = () => {
    const dispatch = useAppDispatch();
    const title = useAppSelector((state) => state.calls.selectedDateType);
    const [hideDatePicker, setHideDatePicker] = useState<boolean>(true);
    const moveTitle = (sign: string) => {
        switch (title) {
            case TypeTitles.days: {
                if (sign === 'inc') {
                    dispatch(setDateType(TypeTitles.week));
                    dispatch(setDateRange([calcDate(TypeTitles.week), new Date()]));
                }
                break;
            }
            case TypeTitles.week: {
                if (sign === 'inc') {
                    dispatch(setDateType(TypeTitles.month));
                    dispatch(setDateRange([calcDate(TypeTitles.month), new Date()]));
                } else {
                    dispatch(setDateType(TypeTitles.days));
                    dispatch(setDateRange([calcDate(TypeTitles.days), new Date()]));
                }
                break;
            }
            case TypeTitles.month: {
                if (sign === 'inc') {
                    dispatch(setDateType(TypeTitles.year));
                    dispatch(setDateRange([calcDate(TypeTitles.year), new Date()]));
                } else {
                    dispatch(setDateType(TypeTitles.week));
                    dispatch(setDateRange([calcDate(TypeTitles.week), new Date()]));
                }
                break;
            }
            case TypeTitles.year: {
                if (sign === 'dec') {
                    dispatch(setDateType(TypeTitles.month));
                    dispatch(setDateRange([calcDate(TypeTitles.month), new Date()]));
                }
                break;
            }
            default:
                break;
        }
    };

    return (
        <>
            {!hideDatePicker ? <OutsideWrapper statusSwitch={() => setHideDatePicker((prev) => !prev)} /> : null}
            <div className={styles.container}>
                <div className={styles.date}>
                    <button type="button" className={styles.iconWrapper} onClick={() => moveTitle('dec')}>
                        <div className={classNames(styles.arrow, {}, [styles.left])} />
                    </button>
                    <button type="button" className={styles.wrapper} onClick={() => setHideDatePicker((prev) => !prev)}>
                        <div className={styles.icon} />
                        <span className={styles.text}>{title}</span>
                    </button>
                    <button type="button" className={styles.iconWrapper} onClick={() => moveTitle('inc')}>
                        <div className={classNames(styles.arrow, {}, [styles.right])} />
                    </button>
                </div>
                <DateDropdown hidden={hideDatePicker} statusSwitch={() => setHideDatePicker((prev) => !prev)} />
            </div>
        </>
    );
};
