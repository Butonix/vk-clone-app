import { SEARCH_WALL_POST } from './../constants/ActionTypes';

export default function SearchWallPost(post) {
	return {
		type: SEARCH_WALL_POST,
		data: post,
	};
}
