import React, { FC, useState } from 'react';
import { PUBLIC_FOLDER } from '../../../../../shared/lib/helpers';
import { classNames } from '../../../../../shared/lib/classNames/classNames';
import { callType, durationParser, phoneParser } from '../lib/helpers';
import { AudioPlayer } from '../../../../audio-player/ui';
import styles from './TableRow.module.scss';

interface TableRowProps {
    type: [number, string];
    time: string;
    employee: string;
    isWeb: number;
    call: number;
    source: string;
    rate: string[];
    duration: number;
    partnership_id: string;
    record: string;
}

export const TableRow: FC<TableRowProps> = ({
    type,
    time,
    employee,
    isWeb,
    call,
    source,
    rate,
    duration,
    partnership_id,
    record,
}) => {
    const [hover, setHover] = useState<boolean>(false);
    const audio = () => {
        if (type[1] !== 'Не дозвонился') {
            if (hover && record !== '') {
                return (
                    <div className={styles.duration}>
                        <AudioPlayer
                            duration={durationParser(duration)}
                            partnership_id={partnership_id}
                            record={record}
                        />
                    </div>
                );
            }
            return (
                <span className={styles.duration}>{type[1] !== 'Не дозвонился' ? durationParser(duration) : null}</span>
            );
        }
        return null;
    };

    return (
        <div className={styles.container} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img className={styles.type} src={`${PUBLIC_FOLDER}/icons/${callType(type)}`} alt="Type" />
            <span className={styles.time}>{`${time.split(' ')[1].split(':')[0]}:${
                time.split(' ')[1].split(':')[1]
            }`}</span>
            <img className={styles.employee} src={employee || 'https://lk.skilla.ru/img/noavatar.jpg'} alt="Profile" />
            <div className={classNames(styles.web, { [styles.show]: isWeb === 1 }, [])} />
            <span className={styles.call}>{phoneParser(call.toString())}</span>
            <span className={styles.source}>{source}</span>
            <span className={styles.rate}>{rate.map((item) => item)}</span>
            {audio()}
        </div>
    );
};
