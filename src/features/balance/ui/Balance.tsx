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
            <img className={styles.icon} src={`${process.env.PUBLIC_URL}/icons/balance.svg`} alt="Balance" />
        </div>
    );
};
