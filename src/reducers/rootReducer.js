import {
	SHOW_MODAL,
	HIDE_MODAL,
	SHOW_ALBUM_CAROUSEL,
	HIDE_ALBUM_CAROUSEL,
	SHOW_PHOTO_ALBUM,
	HIDE_PHOTO_ALBUM,
} from './../constants/ActionTypes';

const initialState = {
	modalShow: false,
	albumCarouselShow: false,
	photoAlbumShow: false,
	overflow: true,
};

export default function rootReducer(state = initialState, action) {
	if (action.type === SHOW_PHOTO_ALBUM) {
		return {
			...state,
			photoAlbumShow: true,
			overflow: false,
		};
	}
	if (action.type === HIDE_PHOTO_ALBUM) {
		return {
			...state,
			photoAlbumShow: false,
			overflow: true,
		};
	}
	if (action.type === SHOW_ALBUM_CAROUSEL) {
		return {
			...state,
			albumCarouselShow: true,
			overflow: false,
		};
	}
	if (action.type === HIDE_ALBUM_CAROUSEL) {
		return {
			...state,
			albumCarouselShow: false,
			overflow: true,
		};
	}
	if (action.type === SHOW_MODAL) {
		return {
			...state,
			modalShow: true,
			overflow: false,
		};
	}
	if (action.type === HIDE_MODAL) {
		return {
			...state,
			modalShow: false,
			overflow: true,
		};
	}
	return state;
}
