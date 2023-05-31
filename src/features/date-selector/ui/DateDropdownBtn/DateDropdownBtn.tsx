import React, { FC } from 'react';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { PUBLIC_FOLDER } from '../../../../shared/lib/helpers';
import { useAppDispatch } from '../../../../shared/lib/hooks';
import { setDateRange, setDateType } from '../../../../entities/header/model';
import { TypeTitles } from '../../../../entities/header/model/types';
import calcDate from '../../lib/helpers/calcDate';
import styles from './DateDropdownBtn.module.scss';

interface DateDropdownBtnProps {
    type: TypeTitles;
    selected: boolean;
    statusSwitch: () => void;
}
const { RangePicker } = DatePicker;

export const DateDropdownBtn: FC<DateDropdownBtnProps> = ({ type, selected, statusSwitch }) => {
    const dispatch = useAppDispatch();
    const setTime = (dates: [string, string]) => {
        const beginDate = dates[0].split('.').map((item) => +item);
        const endDate = dates[1].split('.').map((item) => +item);
        dispatch(
            setDateRange([
                new Date(beginDate[2] + 2000, beginDate[1] - 1, beginDate[0]),
                new Date(endDate[2] + 2000, endDate[1] - 1, endDate[0]),
            ])
        );
    };

    return (
        <button
            className={classNames(styles.btn, {}, [type === TypeTitles.customDate ? styles.calendar : ''])}
            type="button"
            onClick={() => {
                dispatch(setDateType(type));
                if (type !== TypeTitles.customDate) {
                    dispatch(setDateRange([calcDate(type), new Date()]));
                    statusSwitch();
                }
            }}
        >
            <span
                className={classNames(styles.text, {}, [
                    selected ? styles.selected : '',
                    type === TypeTitles.customDate ? styles.textCalendar : '',
                ])}
            >
                {type}
            </span>
            {type === TypeTitles.customDate ? (
                <RangePicker
                    className={styles.calendar}
                    style={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: 28,
                        color: '#ADBFDF',
                    }}
                    separator="-"
                    placeholder={['__.__.__', '__.__.__']}
                    locale={locale}
                    bordered={false}
                    format="DD.MM.YY"
                    allowClear={false}
                    suffixIcon={<img src={`${PUBLIC_FOLDER}/icons/icon-calendar.png`} alt="" />}
                    onChange={(a, b) => setTime(b)}
                />
            ) : null}
        </button>
    );
};
