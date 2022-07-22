import { getPostsAPI } from "../../API/api"
import { setState, setError ,setLoading, setPages } from "../actions/actions"



export const initPageThunk = (pagePost = 10) => (dispatch, getState)=>{
    const state = getState();
    const posts = state.posts;
    const pages = [];
    for(let i=0, j=1; i < posts.length; i+=pagePost, j++){
        let page = {
            number: j,
            posts: []
        }
        page.posts.push(...posts.slice(i,i+10));
        pages.push({...page});
    }
    dispatch(setPages(pages));
}


export const setStateThunk = () => async (dispatch, getState) => {
    try{
        dispatch(setLoading());

        let dataPost = await getPostsAPI();

        dispatch(setState(dataPost))
        dispatch(initPageThunk())
    }
    catch(err){
        dispatch(setError(err));
    }
}

