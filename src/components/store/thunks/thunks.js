import { getPostsAPI } from "../../API/api"
import { setState, setError ,setLoading, setPages } from "../actions/actions"




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



export const initPageThunk = (pagePost = 10) => (dispatch, getState)=>{
    const state = getState();
    const posts = state.posts;
    const pages = [];

    for(let i=0, j=1; i < posts.length; i+=pagePost, j++){
        let page = {
            number: j,
            path: `/${j}`,
            prevPath: `/${j-1}`,
            nextPath: `/${j+1}`,
            posts: []
        }
        page.posts.push(...posts.slice(i,i+10));
        pages.push({...page});
    }

    pages[0].path = '/';
    pages[1].prevPath = '/'
    pages[0].prevPath = pages[pages.length-1].path;
    pages[pages.length-1].nextPath = '/';
    dispatch(setPages(pages));
    
}




