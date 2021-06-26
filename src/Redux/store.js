import { applyMiddleware, createStore } from "redux";
import addState from "./reducer/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk)
export const store = createStore(addState, composeWithDevTools(middleware) )