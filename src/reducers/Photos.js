import {
	FETCH_PHOTOS,
	REQUESTED_PHOTOS_FAILED,
	REQUESTED_PHOTOS_SUCCEEDED,
} from './../constants/ActionTypes';

const initialState = {};

export default function Photos(state = initialState, action) {
	if (action.type === FETCH_PHOTOS) {
		return {
			data: '',
			loading: true,
			error: false,
		};
	}
	if (action.type === REQUESTED_PHOTOS_SUCCEEDED) {
		return {
			data: action.data,
			loading: false,
			error: false,
		};
	}
	if (action.type === REQUESTED_PHOTOS_FAILED) {
		return {
			data: '',
			loading: true,
			error: true,
		};
	}
	return state;
}
