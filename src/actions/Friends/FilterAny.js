import { FILTER_FRIENDS_ANY } from './../../constants/ActionTypes';

export default function filterFriendsAny(data) {
	return {
		type: FILTER_FRIENDS_ANY,
		data: data,
	};
}
