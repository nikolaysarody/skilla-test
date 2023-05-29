import React, { FC } from 'react';
import { HeaderInfo } from '../../../entities/header/info/ui/HeaderInfo';
import { UserDropdown } from '../../../features/user-dropdown/ui/UserDropdown';
import { ProfileDropdown } from '../../../features/profile-dropdown/ui/ProfileDropdown';
import { HeaderDate } from '../../../entities/header/date/ui/HeaderDate';
import { PUBLIC_FOLDER } from '../../../shared/helpers';
import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <HeaderDate />
                    <div className={styles.infoCalls}>
                        <HeaderInfo bgColor="green" title="Новые звонки" value={20} totalValue={30} />
                        <HeaderInfo bgColor="yellow" title="Качество разговоров" value={40} />
                        <HeaderInfo bgColor="red" title="Конверсия в заказ" value={67} />
                    </div>
                </div>
                <div className={styles.user}>
                    <img className={styles.search} src={`${PUBLIC_FOLDER}/icons/search.png`} alt="Search" />
                    <UserDropdown />
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    );
};
