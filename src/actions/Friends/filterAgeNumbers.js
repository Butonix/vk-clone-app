import { FILTER_FRIENDS_AGE_NUMBERS } from './../../constants/ActionTypes';


export const filterAgeNumbers = (data) => {
    return {
        type: FILTER_FRIENDS_AGE_NUMBERS,
        data: data
    }
}

export default filterAgeNumbers;