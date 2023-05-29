import React, { useState } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { TypeTitles } from '../../lib/types';
import styles from './DateSelector.module.scss';

export const DateSelector = () => {
    const [title, setTitle] = useState<TypeTitles>(TypeTitles.days);

    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <div className={styles.iconWrapper}>
                    <div className={classNames(styles.arrow, {}, [styles.left])} />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.icon} />
                    <span className={styles.text}>{title}</span>
                </div>
                <div className={styles.iconWrapper}>
                    <div className={classNames(styles.arrow, {}, [styles.right])} />
                </div>
            </div>
            <DateDropdown setTitle={setTitle} />
        </div>
    );
};
