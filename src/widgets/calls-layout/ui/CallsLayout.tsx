import React from 'react';
import { Balance } from '../../../features/balance/ui/Balance';
import { DateSelector } from '../../../features/date-selector/ui/DateSelector';
import styles from './CallsLayout.module.scss';

export const CallsLayout = () => {
    return (
        <div className={styles.balance}>
            <div className={styles.wrapper}>
                <Balance count={272} />
                <DateSelector />
            </div>
        </div>
    );
};
