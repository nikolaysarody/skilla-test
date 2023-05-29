import React from 'react';
import { classNames } from '../../../shared/lib/classNames/classNames';
import styles from './DateSelector.module.scss';

export const DateSelector = () => {
    return (
        <div className={styles.data}>
            <div className={styles.iconWrapper}>
                <div className={classNames(styles.arrow, {}, [styles.left])} />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.icon} />
                <span className={styles.text}>3 дня</span>
            </div>
            <div className={styles.iconWrapper}>
                <div className={classNames(styles.arrow, {}, [styles.right])} />
            </div>
        </div>
    );
};
