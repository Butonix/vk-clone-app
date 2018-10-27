import { SEARCH_FRIENDS } from './../../constants/ActionTypes';

export default function searchFriends(data) {
	return {
		type: SEARCH_FRIENDS,
		data: data,
	};
}
