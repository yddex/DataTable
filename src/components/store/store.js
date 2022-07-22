import { configureStore} from "@reduxjs/toolkit";
import { postsReducer} from "./reducers";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";



export const store = configureStore({
     reducer: postsReducer,
     applyMiddleware: applyMiddleware(thunk)
})
