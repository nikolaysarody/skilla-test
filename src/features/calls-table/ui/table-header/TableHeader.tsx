import React from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import styles from './TableHeader.module.scss';

export const TableHeader = () => {
    return (
        <div className={styles.header}>
            <span className={classNames(styles.text, {}, [styles.type])}>Тип</span>
            <span className={classNames(styles.text, {}, [styles.time])}>Время</span>
            <span className={classNames(styles.text, {}, [styles.employee])}>Сотрудник</span>
            <span className={classNames(styles.text, {}, [styles.call])}>Звонок</span>
            <span className={classNames(styles.text, {}, [styles.source])}>Источник</span>
            <span className={classNames(styles.text, {}, [styles.rate])}>Оценка</span>
            <span className={classNames(styles.text, {}, [])}>Длительность</span>
        </div>
    );
};
