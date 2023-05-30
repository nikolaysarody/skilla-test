import React from 'react';
import { PUBLIC_FOLDER } from '../../../shared/helpers';
import styles from './CallsSearch.module.scss';

export const CallsSearch = () => {
    return (
        <div className={styles.search}>
            <img className={styles.icon} src={`${PUBLIC_FOLDER}/icons/search.png`} alt="Search" />
            <span className={styles.text}>Поиск по звонкам</span>
        </div>
    );
};
