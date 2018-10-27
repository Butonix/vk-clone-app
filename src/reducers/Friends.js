import {
	FETCH_FRIENDS,
	REQUESTED_FRIENDS_FAILED,
	REQUESTED_FRIENDS_SUCCEEDED,
	SEARCH_FRIENDS,
} from './../constants/ActionTypes';

const initialState = {
	searchFriends: '',
};

export default function Friends(state = initialState, action) {
	if (action.type === SEARCH_FRIENDS) {
		return {
			...state,
			searchFriends: action.data,
		};
	}
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
			loading: false,
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
