import { FILTER_FRIENDS_FEMALE } from './../../constants/ActionTypes';

export default function filterFriendsFemale(data) {
	return {
		type: FILTER_FRIENDS_FEMALE,
		data: data,
	};
}
