import { ADD_WALL_POST } from './../constants/ActionTypes';

export default function AddWallPost(post) {
	return {
		type: ADD_WALL_POST,
		data: post,
	};
}
