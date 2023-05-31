export const phoneParser = (call: string) => {
    const phoneNumber = call.split('');
    const newPhone: string[] = [];
    newPhone.unshift(
        '+7 (',
        phoneNumber[1],
        phoneNumber[2],
        phoneNumber[3],
        ') ',
        phoneNumber[4],
        phoneNumber[5],
        phoneNumber[6],
        '-',
        phoneNumber[7],
        phoneNumber[8],
        '-',
        phoneNumber[9],
        phoneNumber[10]
    );
    return newPhone;
};

export const callType = (type: [number, string]) => {
    if (type[1] === 'Не дозвонился') {
        return 'missed.svg';
    }
    if (type[0]) {
        return 'incoming-call.svg';
    }
    return 'outgoing-call.svg';
};

export const durationParser = (duration: number) => {
    let minutes = Math.floor(duration / 60).toString();
    let seconds = (duration % 60).toString();
    if (seconds.length === 1) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
};
