import React, { FC, useEffect, useState } from 'react';
import { classNames } from '../../../../lib/classNames/classNames';
import { DropdownBtn } from '../DropdownBtn/DropdownBtn';
import { OutsideWrapper } from '../../../OutsideWrapper/ui/OutsideWrapper';
import { useAppSelector } from '../../../../lib/hooks';
import styles from './Dropdown.module.scss';

interface DropdownProps {
    buttons: {
        title: string;
        action: () => void;
    }[];
}

export const Dropdown: FC<DropdownProps> = ({ buttons }) => {
    const resetFilters = useAppSelector((state) => state.calls.resetFilters);
    const [hideDatePicker, setHideDatePicker] = useState<boolean>(true);
    const [title, setTitle] = useState<string>(buttons[0].title);

    useEffect(() => {
        if (resetFilters) {
            setTitle(buttons[0].title);
        }
    }, [buttons, resetFilters]);

    return (
        <>
            {!hideDatePicker ? <OutsideWrapper statusSwitch={() => setHideDatePicker((prev) => !prev)} /> : null}
            <div className={classNames(styles.wrapper, { [styles.active]: !hideDatePicker }, [])}>
                <button
                    type="button"
                    className={classNames(styles.title, { [styles.hidden]: !hideDatePicker }, [])}
                    onClick={() => setHideDatePicker((prev) => !prev)}
                >
                    <span className={classNames(styles.text, { [styles.selected]: title !== buttons[0].title }, [])}>
                        {title}
                    </span>
                    <div className={styles.icon} />
                </button>
                <div className={classNames(styles.dropdown, { [styles.hidden]: hideDatePicker }, [])}>
                    {buttons.map((item) => (
                        <DropdownBtn
                            selected={title === item.title}
                            setTitle={setTitle}
                            title={item.title}
                            action={item.action}
                            statusSwitch={() => setHideDatePicker((prev) => !prev)}
                            key={item.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
