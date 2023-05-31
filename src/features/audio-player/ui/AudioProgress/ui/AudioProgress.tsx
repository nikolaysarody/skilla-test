import React, { FC, useRef, useState } from 'react';
import { durationParser } from '../../../../calls-table/ui/table-row/lib/helpers';
import { classNames } from '../../../../../shared/lib/classNames/classNames';
import styles from './AudioProgress.module.scss';

interface AudioProgressProps {
    completed: number;
    offset: (value: number) => void;
    width: (value: number) => void;
    duration: string;
}

export const AudioProgress: FC<AudioProgressProps> = ({ completed, offset, width, duration }) => {
    const progressRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');

    const setParams = (e: React.MouseEvent) => {
        offset(e.nativeEvent.offsetX);
        if (progressRef.current !== null) {
            width(progressRef.current.clientWidth);
        }
    };
    const durationInSec = (): number => {
        return +duration.split(':')[0] * 60 + +duration.split(':')[1];
    };

    const setOffset = (e: React.MouseEvent) => {
        if (tooltipRef.current !== null) {
            tooltipRef.current.style.left = `${e.nativeEvent.offsetX.toString()}px`;
            setTooltipVisible(true);
        }
        if (progressRef.current !== null) {
            const onePercentDuration = durationInSec() / 100;
            const progressPercents = (e.nativeEvent.offsetX / progressRef.current.clientWidth) * 100;
            setTitle(durationParser(Math.floor(progressPercents * onePercentDuration)));
        }
    };
    return (
        <div className={styles.wrapper}>
            <span className={classNames(styles.tooltip, { [styles.hide]: !tooltipVisible }, [])} ref={tooltipRef}>
                {title}
            </span>
            <div
                className={styles.container}
                onClick={(e) => setParams(e)}
                onMouseMove={(e) => setOffset(e)}
                onMouseLeave={() => setTooltipVisible(false)}
                ref={progressRef}
            >
                <div className={styles.filler} style={{ width: `${completed}%` }} />
            </div>
        </div>
    );
};
