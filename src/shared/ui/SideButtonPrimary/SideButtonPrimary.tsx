import React, { FC } from 'react';
import styles from './SideButtonPrimary.module.scss';

interface SideButtonPrimaryProps {
    title: string;
    icon: string;
}

export const SideButtonPrimary: FC<SideButtonPrimaryProps> = ({ title, icon }) => {
    return (
        <div className={styles.button}>
            <span className={styles.text}>{title}</span>
            <img className={styles.icon} src={icon} alt="Icon" />
        </div>
    );
};
