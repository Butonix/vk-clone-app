import { FILTER_FRIENDS_MALE } from './../../constants/ActionTypes';

export default function filterFriendsMale(data) {
	return {
		type: FILTER_FRIENDS_MALE,
		data: data,
	};
}
