import React from 'react';
import { SideButton } from '../../../shared/ui/SideButton/SideButton';
import { SideButtonPrimary } from '../../../shared/ui/SideButtonPrimary/SideButtonPrimary';
import styles from './SideMenu.module.scss';

export const SideMenu = () => {
    const buttons = [
        {
            icon: `${process.env.PUBLIC_URL}/icons/results.svg`,
            title: 'Итоги',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/orders.svg`,
            title: 'Заказы',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/mails.svg`,
            title: 'Сообщения',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/calls.svg`,
            title: 'Звонки',
            isActive: true,
            isNewActivity: true,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/counterparty.svg`,
            title: 'Контрагенты',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/docs.svg`,
            title: 'Документы',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/workers.svg`,
            title: 'Исполнители',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/reports.svg`,
            title: 'Отчеты',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/db.svg`,
            title: 'База знаний',
            isActive: false,
            isNewActivity: false,
        },
        {
            icon: `${process.env.PUBLIC_URL}/icons/settings.svg`,
            title: 'Настройки',
            isActive: false,
            isNewActivity: false,
        },
    ];

    return (
        <div className={styles.sideMenu}>
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={`${process.env.PUBLIC_URL}/icons/logo.svg`} alt="Logo" />
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
                <SideButtonPrimary
                    title="Добавить заказ"
                    icon={`${process.env.PUBLIC_URL}/icons/add-order.svg`}
                    key={`${process.env.PUBLIC_URL}/icons/add-order.svg`}
                />
                <SideButtonPrimary
                    title="Оплата"
                    icon={`${process.env.PUBLIC_URL}/icons/pay.svg`}
                    key={`${process.env.PUBLIC_URL}/icons/pay.svg`}
                />
            </div>
        </div>
    );
};
