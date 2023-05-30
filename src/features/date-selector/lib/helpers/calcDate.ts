import { TypeTitles } from '../../../../entities/header/model/types';

const calcDate = (selectedType: TypeTitles): Date => {
    let date = new Date().getTime();
    switch (selectedType) {
        case TypeTitles.days: {
            date -= 3 * 24 * 60 * 60 * 1000;
            break;
        }
        case TypeTitles.week: {
            date -= 7 * 24 * 60 * 60 * 1000;
            break;
        }
        case TypeTitles.month: {
            date -= 30 * 24 * 60 * 60 * 1000;
            break;
        }
        case TypeTitles.year: {
            date -= 365 * 24 * 60 * 60 * 1000;
            break;
        }
        default:
            break;
    }
    return new Date(date);
};

export default calcDate;
