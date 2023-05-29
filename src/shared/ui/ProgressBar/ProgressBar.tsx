import React, { FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    bgColor: 'green' | 'yellow' | 'red';
    completed: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ bgColor, completed }) => {
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
        <div className={styles.container}>
            <div className={classNames(styles.filler, {}, [color()])} style={{ width: `${completed}%` }} />
        </div>
    );
};
