import { FILTER_FRIENDS_AGE_TO } from './../../constants/ActionTypes';

export default function filterAgeTo(data) {
	return {
		type: FILTER_FRIENDS_AGE_TO,
		data: data,
	};
}
