import { getPostsAPI } from "../../API/api"
import { setState, setError ,setLoading, setPages, setSort } from "../actions/actions"




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



export const initPageThunk = (sorted=false, pagePostCount = 10, ) => (dispatch, getState)=>{
    let posts = [];
    if(!sorted){
        posts = [...getState().posts];
    }else{
        posts = [...getState().sortedPosts];
    }
    const pages = [];
    
    for(let i=0, j=1; i < posts.length; i+=pagePostCount, j++){
        let page = {
            number: j,
            path: `/DataTable/${j}`,
            prevPath: `/DataTable/${j-1}`,
            nextPath: `/DataTable/${j+1}`,
            posts: []
        }
        page.posts.push(...posts.slice(i,i+pagePostCount));
        pages.push({...page});
    }

    pages[0].path = '/DataTable/';
    pages[1].prevPath = '/DataTable/'
    pages[0].prevPath = pages[pages.length-1].path;
    pages[pages.length-1].nextPath = '/DataTable/';


    dispatch(setPages(pages));
}



export const setSortThunk = (sortBoolean=false, key) => (dispatch, getState) => {
    const posts = [...getState().posts];
    let sortedList = [];

    if(sortBoolean === true && key === "id"){
        sortedList = posts.sort((a,b)=>{
            if(a[key] > b[key]){
                return -1;
            }
            if(a[key] < b[key]){
                return 1;
            }
            return 0;
        })
        dispatch(setSort(sortedList));
    }
    else if(sortBoolean === true && (key === "title" || key === "body")){

        sortedList = posts.sort((a,b)=>{
            if(a[key][0] > b[key][0]){
                return -1;
            }
            if(a[key][0] < b[key][0]){
                return 1;
            }
            return 0;
        })
        dispatch(setSort(sortedList));
    }
    else{
        dispatch(setSort(posts))
    }
    dispatch(initPageThunk(true));
}



    





