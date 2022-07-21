import { getPostsAPI } from "../../API/api"
import { setState, setError ,setLoading } from "../actions/actions"

export const setStateThunk = () => async (dispatch, getState) => {
    try{
        dispatch(setLoading());

        let dataPost = await getPostsAPI();

        dispatch(setState(dataPost))
    }
    catch(err){
        dispatch(setError(err));
    }
}