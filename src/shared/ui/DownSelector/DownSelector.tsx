import React, { FC } from 'react';
import styles from './DownSelector.module.scss';

export const DownSelector: FC = () => {
    return <img className={styles.img} src={`${process.env.PUBLIC_URL}/icons/dropdown-down.png`} alt="Down" />;
};
