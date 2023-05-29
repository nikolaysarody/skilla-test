import React, { FC } from 'react';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { TypeTitles } from '../../lib/types';
import { PUBLIC_FOLDER } from '../../../../shared/helpers';
import styles from './DateDropdownBtn.module.scss';

interface DateDropdownBtnProps {
    type: TypeTitles;
    selected: boolean;
    value: (item: TypeTitles) => void;
}
const { RangePicker } = DatePicker;

export const DateDropdownBtn: FC<DateDropdownBtnProps> = ({ type, selected, value }) => {
    return (
        <button
            className={classNames(styles.btn, {}, [type === TypeTitles.customDate ? styles.calendar : ''])}
            type="button"
            onClick={() => value(type)}
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
                    separator={<span style={{ padding: 0 }}>-</span>}
                    placeholder={['__.__.__', '__.__.__']}
                    locale={locale}
                    bordered={false}
                    format="DD.MM.YY"
                    allowClear={false}
                    suffixIcon={<img src={`${PUBLIC_FOLDER}/icons/icon-calendar.png`} alt="" />}
                />
            ) : null}
        </button>
    );
};
