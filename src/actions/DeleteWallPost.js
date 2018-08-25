import { DELETE_WALL_POST } from './../constants/ActionTypes';


export default function DeleteWallPost(post) {
    return {
        type: DELETE_WALL_POST,
        data: post
    }
}