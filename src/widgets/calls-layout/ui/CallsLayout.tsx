import React from 'react';
import { Balance } from '../../../features/balance/ui/Balance';
import styles from './CallsLayout.module.scss';

export const CallsLayout = () => {
    return (
        <div className={styles.balance}>
            <Balance count={272} />
        </div>
    );
};
