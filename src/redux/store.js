import { applyMiddleware,createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authreducer";

const store = createStore(
    combineReducers({authReducer}),
    window.location.href.search("localhost") !==-1 ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
);

export default store;