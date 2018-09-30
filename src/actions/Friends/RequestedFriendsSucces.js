import { REQUESTED_FRIENDS_SUCCEEDED } from './../../constants/ActionTypes';

export default function requestedFriendsSuccess(data) {
	return {
		type: REQUESTED_FRIENDS_SUCCEEDED,
		data: data.results,
	};
}
