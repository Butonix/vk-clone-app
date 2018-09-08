
import { 
    FETCH_FREINDS,
    REQUESTED_FREINDS_FAILED,
    REQUESTED_FREINDS_SUCCEEDED
} from './../constants/ActionTypes';

const initialState = {};

export default function Freinds(state = initialState, action) {
    if (action.type === FETCH_FREINDS) {
        return {
            data: '',
            loading: true,
            error: false
        }
    }
    if (action.type === REQUESTED_FREINDS_SUCCEEDED) {
        return {
            data: action.data,
            loading: true,
            error: false
        }
    }
    if (action.type === REQUESTED_FREINDS_FAILED) {
        return {
            data: '',
            loading: false,
            error: true
        }
    }
    return  state;
}