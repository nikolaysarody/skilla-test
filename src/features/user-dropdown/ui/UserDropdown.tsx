import React, { FC } from 'react';
import { DownSelector } from '../../../shared/ui/DownSelector/DownSelector';
import styles from './UserDropdown.module.scss';

export const UserDropdown: FC = () => {
    return (
        <div className={styles.container}>
            <span className={styles.text}>ИП Сидорова Александра Михайловна</span>
            <DownSelector />
        </div>
    );
};
