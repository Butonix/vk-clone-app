import {
	FETCH_FRIENDS,
	REQUESTED_FRIENDS_FAILED,
	REQUESTED_FRIENDS_SUCCEEDED,
} from './../constants/ActionTypes';

const initialState = {};

export default function Friends(state = initialState, action) {
	if (action.type === FETCH_FRIENDS) {
		return {
			data: '',
			loading: true,
			error: false,
		};
	}
	if (action.type === REQUESTED_FRIENDS_SUCCEEDED) {
		return {
			data: action.data,
			loading: true,
			error: false,
		};
	}
	if (action.type === REQUESTED_FRIENDS_FAILED) {
		return {
			data: '',
			loading: false,
			error: true,
		};
	}
	return state;
}
