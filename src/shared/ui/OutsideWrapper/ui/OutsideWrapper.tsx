import React, { FC } from 'react';
import styles from './OutsideWrapper.module.scss';

interface OutsideWrapperProps {
    statusSwitch: () => void;
}

export const OutsideWrapper: FC<OutsideWrapperProps> = ({ statusSwitch }) => {
    return (
        <button
            type="button"
            aria-label="close"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    statusSwitch();
                }
            }}
            className={styles.outsideWrapper}
        />
    );
};
