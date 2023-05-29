import React from 'react';
import { SideMenu } from '../../../widgets/side-menu/ui/SideMenu';
import { Header } from '../../../widgets/header/ui/Header';
import { CallsLayout } from '../../../widgets/calls-layout/ui/CallsLayout';
import styles from './CallPage.module.scss';

export const CallPage = () => {
    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.wrapper}>
                <Header />
                <CallsLayout />
            </div>
        </div>
    );
};
