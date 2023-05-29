import React, { FC } from 'react';
import { ProgressBar } from '../../../../shared/ui/ProgressBar/ProgressBar';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import styles from './HeaderInfo.module.scss';

interface HeaderInfoProps {
    title: string;
    value: number;
    totalValue?: number | undefined;
    bgColor: 'green' | 'yellow' | 'red';
}

export const HeaderInfo: FC<HeaderInfoProps> = ({ title, value, bgColor, totalValue }) => {
    const color = () => {
        switch (bgColor) {
            case 'yellow':
                return styles.yellow;
            case 'green':
                return styles.green;
            case 'red':
                return styles.red;
            default:
                return '';
        }
    };

    return (
        <div className={styles.call}>
            <span className={styles.text}>{title}&nbsp;</span>
            <span className={classNames(color(), {}, [styles.text])}>
                {totalValue ? `${value} из ${totalValue} шт` : `${value}%`}
            </span>
            <ProgressBar bgColor={bgColor} completed={totalValue ? (value / totalValue) * 100 : value} />
        </div>
    );
};

HeaderInfo.defaultProps = {
    totalValue: undefined,
};
