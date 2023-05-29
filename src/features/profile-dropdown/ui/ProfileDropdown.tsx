import React, { FC } from 'react';
import { DownSelector } from '../../../shared/ui/DownSelector/DownSelector';
import styles from './ProfileDropdown.module.scss';

export const ProfileDropdown: FC = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={`${process.env.PUBLIC_URL}/icons/profile.png`} alt="Profile" />
            <DownSelector />
        </div>
    );
};
