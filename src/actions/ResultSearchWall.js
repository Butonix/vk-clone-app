import { NO_RESULT_SEARCH_WALL_POSTS } from './../constants/ActionTypes';


export default function ResultSearchWall (result) {
    return {
        type: NO_RESULT_SEARCH_WALL_POSTS,
        data: result
    }
}