import { ADD_PHOTO_COMMENT } from './../constants/ActionTypes';



export default function addPhotoComment (comment) {
    return {
        type: ADD_PHOTO_COMMENT,
        data: comment
    }
}