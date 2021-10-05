import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
