import { REQUESTED_PHOTOS_SUCCEEDED } from './../../constants/ActionTypes';

export default function requestedPhotosSuccess(data) {
	return {
		type: REQUESTED_PHOTOS_SUCCEEDED,
		data: data,
	};
}
