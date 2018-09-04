import {  NO_RESULT_SEARCH_WALL_POSTS } from './../constants/ActionTypes';


export default function resultSearchWall(post) {
    return {
        type: NO_RESULT_SEARCH_WALL_POSTS,
        data: post
    }
}