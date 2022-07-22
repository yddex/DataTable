import {
    SET_STATE_POST,
    SET_STATE_ERROR,
    SET_STATE_LOADING,
    SET_PAGES,
} from "./types";

export const setState = (payload) => {
    return {
        type: SET_STATE_POST,
        payload
    }
}

export const setLoading = () => {
    return {
        type: SET_STATE_LOADING
    }
}

export const setError = (payload) => {
    return {
        type: SET_STATE_ERROR,
        payload
    }
}


export const setPages = (payload) => {
    return {
        type: SET_PAGES,
        payload
    }
}


