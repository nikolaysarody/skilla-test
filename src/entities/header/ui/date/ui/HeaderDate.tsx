import React, { FC } from 'react';
import styles from './HeaderDate.module.scss';

export const HeaderDate: FC = () => {
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        weekday: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    };
    const now = () => {
        const date = new Date().toLocaleDateString('ru-RU', options).split('');
        date[0] = date[0].toUpperCase();
        return date;
    };

    // Добавил в код "Среда, 13 окт" для соответствия макету
    // Для вывода актуальной даты нужно вставить {now()}
    return <span className={styles.date}>Среда, 13 окт</span>;
};
