import { SET_STATE_POST, SET_STATE_ERROR, SET_STATE_LOADING } from "./actions/types";

let initialState = {
    posts: [],
    loading: false,
    error: false
}


export function postsReducer(state = initialState, action){
    switch(action.type){

        case SET_STATE_LOADING:
            return {...state, loading: true}

        case SET_STATE_POST: 
            return {...state, posts: action.payload, loading: false, error: false};

        case SET_STATE_ERROR:
            return {...state, loading: false, error: action.payload}    

        default: return state;
    }
}