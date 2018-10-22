import { REQUESTED_NEWS_FAILED } from './../../constants/ActionTypes';

export default function requestedNewsError() {
	return {
		type: REQUESTED_NEWS_FAILED,
	};
}
