import { combineReducers } from "redux";
import userListReducer from "./usersReducer";


export default combineReducers({
	users: userListReducer
})