import React from 'react';
import { SideButton } from '../../../shared/ui/SideButton/SideButton';
import { SideButtonPrimary } from '../../../shared/ui/SideButtonPrimary/SideButtonPrimary';
import { PUBLIC_FOLDER } from '../../../shared/lib/helpers';
import styles from './SideMenu.module.scss';

export const SideMenu = () => {
    const buttons = [
        {
            icon: `${PUBLIC_FOLDER}/icons/results.svg`,
            title: 'Итоги',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/orders.svg`,
            title: 'Заказы',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/mails.svg`,
            title: 'Сообщения',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/calls.svg`,
            title: 'Звонки',
            isActive: true,
            isNewActivity: true,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/counterparty.svg`,
            title: 'Контрагенты',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/docs.svg`,
            title: 'Документы',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/workers.svg`,
            title: 'Исполнители',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/reports.svg`,
            title: 'Отчеты',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/db.svg`,
            title: 'База знаний',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${PUBLIC_FOLDER}/icons/settings.svg`,
            title: 'Настройки',
            isActive: false,
            isNewActivity: false,
        },
    ];

    return (
        <div className={styles.sideMenu}>
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={`${PUBLIC_FOLDER}/icons/logo.svg`} alt="Logo" />
            </div>
            {buttons.map((item) => (
                <SideButton
                    icon={item.icon}
                    title={item.title}
                    isActive={item.isActive}
                    isNewActivity={item.isNewActivity}
                    key={item.icon}
                />
            ))}
            <div className={styles.btnPrimary}>
                <SideButtonPrimary type="primary" key="primary" />
                <SideButtonPrimary type="pay" key="pay" />
            </div>
        </div>
    );
};
