import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/jokeReducer";

export default createStore(reducer, applyMiddleware(thunk));