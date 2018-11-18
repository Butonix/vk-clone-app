import { FILTER_FRIENDS_AGE_FROM } from './../../constants/ActionTypes';

export default function filterAgeFrom(data) {
	return {
		type: FILTER_FRIENDS_AGE_FROM,
		data: data,
	};
}
