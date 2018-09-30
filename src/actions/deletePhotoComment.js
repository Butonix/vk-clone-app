import { DELETE_PHOTO_COMMENT } from './../constants/ActionTypes';

export default function deletePhotoComment(timestamp) {
	return {
		type: DELETE_PHOTO_COMMENT,
		data: timestamp,
	};
}
