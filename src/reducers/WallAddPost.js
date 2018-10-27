import {
	ADD_WALL_POST,
	DELETE_WALL_POST,
	SEARCH_WALL_POST,
} from './../constants/ActionTypes';

const initialState = {
	searchText: '',
	posts: [
		{
			id: Date.now().toString(),
			text:
				'Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed. ',
		},
		{
			id: Date.now().toString(),
			text:
				'And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything. ',
		},
	],
};

export default function WallAddPost(state = initialState, action) {
	if (action.type === ADD_WALL_POST) {
		return {
			...state,
			text: state.posts.unshift(action.data),
		};
	}
	if (action.type === DELETE_WALL_POST) {
		return {
			...state,
			text: state.posts.shift(action.data),
		};
	}

	if (action.type === SEARCH_WALL_POST) {
		return {
			...state,
			searchText: action.data,
		};
	}

	return state;
}
