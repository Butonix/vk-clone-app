import {
	ADD_PHOTO_COMMENT,
	DELETE_PHOTO_COMMENT,
} from './../constants/ActionTypes';

const initialState = {
	photoComments: [],
	timestamps: [],
};

export default function photoComments(state = initialState, action) {
	if (action.type === ADD_PHOTO_COMMENT) {
		return {
			...state,
			comments: state.photoComments.push(action.data),
		};
	}
	if (action.type === DELETE_PHOTO_COMMENT) {
		return {
			...state,
			currentTimeStamps: state.timestamps.push(action.data),
		};
	}
	return state;
}
