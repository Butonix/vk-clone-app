import { SHOW_MODAL, HIDE_MODAL } from './../constants/ActionTypes';


const initialState = {
    modalShow: false,
}


export default function rootReducer (state = initialState, action) {
    if (action.type === SHOW_MODAL) {
        return {
            ...state,
            modalShow: true
        }
    }
    if (action.type === HIDE_MODAL) {
        return {
            ...state,
            modalShow: false

        }
    }
    return state;
}