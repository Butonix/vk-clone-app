import {
	FETCH_NEWS,
	REQUESTED_NEWS_FAILED,
	REQUESTED_NEWS_SUCCEEDED,
} from './../constants/ActionTypes';

const initialState = {};

export default function News(state = initialState, action) {
	if (action.type === FETCH_NEWS) {
		return {
			data: '',
			loading: true,
			error: false,
		};
	}
	if (action.type === REQUESTED_NEWS_FAILED) {
		return {
			data: action.data,
			loading: true,
			error: false,
		};
	}
	if (action.type === REQUESTED_NEWS_SUCCEEDED) {
		return {
			data: action.data,
			loading: false,
			error: true,
		};
	}
	return state;
}
