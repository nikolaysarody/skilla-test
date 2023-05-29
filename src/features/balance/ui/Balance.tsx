import React, { FC } from 'react';
import styles from './Balance.module.scss';

interface BalanceProps {
    count: number;
}

export const Balance: FC<BalanceProps> = ({ count }) => {
    return (
        <div className={styles.balance}>
            <span className={styles.text}>
                Баланс: <span className={styles.count}>{count} ₽</span>
            </span>
            <div className={styles.icon} />
        </div>
    );
};
