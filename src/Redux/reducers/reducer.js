import jokeReducer from "./jokeReducer";
import commentReducer from "./commentReducer";
import { combineReducers } from "redux";

export const reducer = combineReducers({
    jokes: jokeReducer,
    comments: commentReducer
})