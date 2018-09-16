import { REQUESTED_PHOTOS_FAILED } from './../../constants/ActionTypes';

export default function requestedPhotosError() {
	return {
		type: REQUESTED_PHOTOS_FAILED,
	};
}
