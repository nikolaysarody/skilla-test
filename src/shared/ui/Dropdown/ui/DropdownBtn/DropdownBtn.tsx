import React, { FC } from 'react';
import { classNames } from '../../../../lib/classNames/classNames';
import styles from './DropdownBtn.module.scss';

interface DropdownBtnType {
    title: string;
    action: () => void;
    statusSwitch: () => void;
    setTitle: (title: string) => void;
    selected: boolean;
}

export const DropdownBtn: FC<DropdownBtnType> = ({ title, action, statusSwitch, setTitle, selected }) => {
    return (
        <button
            type="button"
            className={styles.btn}
            onClick={() => {
                action();
                statusSwitch();
                setTitle(title);
            }}
        >
            <span className={classNames(styles.text, { [styles.selected]: selected }, [])}>{title}</span>
        </button>
    );
};
