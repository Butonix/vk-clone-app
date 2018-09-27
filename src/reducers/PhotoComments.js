import { ADD_PHOTO_COMMENT } from './../constants/ActionTypes';


const initialState = {
    photoComments: []
}

export default function photoComments(state = initialState, action) {
    if (action.type === ADD_PHOTO_COMMENT) {
        return {
            ...state,
            comments: state.photoComments.push(action.data)
        }
    }
    return state
}