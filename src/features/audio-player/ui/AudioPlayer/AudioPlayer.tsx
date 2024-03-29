import React, { FC, useEffect, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { AudioProgress } from '../AudioProgress/ui/AudioProgress';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks';
import { fetchCallRecord } from '../../model/action';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { resetSrc } from '../../model';
import styles from './AudioPlayer.module.scss';

interface AudioPlayerProps {
    record: string;
    partnership_id: string;
    duration: string;
}

export const AudioPlayer: FC<AudioPlayerProps> = ({ duration, record, partnership_id }) => {
    const dispatch = useAppDispatch();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const [progressBarWidth, setProgressBarWidth] = useState<number>(0);
    const src = useAppSelector((state) => state.record.src);
    const loading = useAppSelector((state) => state.record.isLoading);
    const audioRef = useRef<HTMLAudioElement>(null);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const playSwitch = () => {
        setIsPlaying((prev) => !prev);
        if (src === '') {
            dispatch(fetchCallRecord({ record, partnership_id })).then(() => {
                if (!isPlaying) {
                    if (audioRef.current !== null) {
                        audioRef.current.play();
                    }
                } else if (audioRef.current !== null) {
                    audioRef.current.pause();
                }
            });
        } else if (!isPlaying) {
            if (audioRef.current !== null) {
                audioRef.current.play();
            }
        } else if (audioRef.current !== null) {
            audioRef.current.pause();
        }
    };

    const onPlaying = () => {
        if (audioRef.current !== null) {
            const audioDuration = audioRef.current.duration;
            const { currentTime } = audioRef.current;
            setProgress((currentTime / audioDuration) * 100);
        }
    };

    const onEnded = () => {
        setIsPlaying(false);
        setProgress(0);
        if (audioRef.current !== null) {
            audioRef.current.currentTime = 0;
        }
    };

    const onStop = () => {
        setIsPlaying(false);
        setProgress(0);
        if (audioRef.current !== null) {
            audioRef.current.currentTime = 0;
            audioRef.current.pause();
        }
    };

    useEffect(() => {
        dispatch(resetSrc());
    }, []);

    useEffect(() => {
        if (audioRef.current !== null && offset !== 0 && isPlaying) {
            const audioDuration = audioRef.current.duration;
            audioRef.current.currentTime = (offset / progressBarWidth) * audioDuration;
        }
    }, [offset]);

    return (
        <div className={styles.audio}>
            <span className={styles.duration}>{duration}</span>
            {!loading ? (
                <button type="button" className={isPlaying ? styles.pause : styles.play} onClick={() => playSwitch()} />
            ) : (
                <Spin className={styles.loading} indicator={antIcon} />
            )}
            <audio src={src} ref={audioRef} onTimeUpdate={onPlaying} onEnded={onEnded} />
            <AudioProgress completed={progress} offset={setOffset} width={setProgressBarWidth} duration={duration} />
            <button
                type="button"
                className={classNames(styles.download, { [styles.disabled]: loading }, [])}
                onClick={() => {
                    if (src !== '') {
                        saveAs(src, 'record.mp3');
                    } else {
                        dispatch(fetchCallRecord({ record, partnership_id })).then((res) => saveAs(res, 'record.mp3'));
                    }
                }}
            />
            {(isPlaying && !loading) || progress > 0 ? (
                <button type="button" className={styles.close} onClick={onStop} />
            ) : null}
        </div>
    );
};
