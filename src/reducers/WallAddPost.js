

import { 
        ADD_WALL_POST,
        DELETE_WALL_POST,
        SEARCH_WALL_POST
} from './../constants/ActionTypes';

const initialState = {
    searchText: '',
    posts: [
        {
            id: Date.now().toString(),
            text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.'
        },
        {
            id: Date.now().toString(),
            text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.'
        }
    ]
}


export default function WallAddPost(state = initialState, action)  {
    
    if (action.type === ADD_WALL_POST) {
        return {
          ...state,
          text: state.posts.unshift(action.data)
        }
    }  
    if (action.type === DELETE_WALL_POST) {
        return {
            ...state,
            text: state.posts.shift(action.data)
        }
    }

    if (action.type === SEARCH_WALL_POST) {
        
        return {
            ...state,
            searchText: action.data 
        }
    }
    return state;
} 