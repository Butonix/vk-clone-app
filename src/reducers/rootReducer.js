import {
	SHOW_MODAL,
	HIDE_MODAL,
	SHOW_ALBUM_CAROUSEL,
	HIDE_ALBUM_CAROUSEL,
} from './../constants/ActionTypes';

const initialState = {
	modalShow: false,
	albumCarouselShow: false,
	overflow: true,
};

export default function rootReducer(state = initialState, action) {
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
