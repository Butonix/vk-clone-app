import { REQUESTED_NEWS_SUCCEEDED } from './../../constants/ActionTypes';

export default function requestedNewsSuccess(data) {
	return {
		type: REQUESTED_NEWS_SUCCEEDED,
		data: data,
	};
}
