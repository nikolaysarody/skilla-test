import React, { FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import styles from './SideButtonPrimary.module.scss';

interface SideButtonPrimaryProps {
    type: 'pay' | 'primary';
}

export const SideButtonPrimary: FC<SideButtonPrimaryProps> = ({ type }) => {
    return (
        <div className={styles.button}>
            <span className={classNames(styles.text, {}, [type === 'pay' ? styles.pay : styles.primary])}>
                {type === 'pay' ? 'Оплата' : 'Добавить заказ'}
            </span>
            <img
                className={classNames(styles.icon, {}, [type === 'pay' ? styles.pay : styles.primary])}
                src={
                    type === 'pay'
                        ? `${process.env.PUBLIC_URL}/icons/pay.svg`
                        : `${process.env.PUBLIC_URL}/icons/add-order.svg`
                }
                alt="Icon"
            />
        </div>
    );
};
