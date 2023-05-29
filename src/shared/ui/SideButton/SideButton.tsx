import React, { FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import styles from './SideButton.module.scss';

interface SideButtonProps {
    icon: string;
    title: string;
    isActive: boolean;
    isNewActivity: boolean;
}

export const SideButton: FC<SideButtonProps> = ({ icon, title, isActive, isNewActivity }) => {
    return (
        <div className={classNames(styles.btn, { [styles.active]: isActive }, [])}>
            <div className={classNames(styles.icon, { [styles.iconActive]: isActive }, [])}>
                <img src={icon} alt="Icon" />
            </div>
            <span className={classNames(styles.text, { [styles.textActive]: isActive }, [])}>{title}</span>
            {isNewActivity ? <div className={styles.newActivity} /> : null}
        </div>
    );
};
