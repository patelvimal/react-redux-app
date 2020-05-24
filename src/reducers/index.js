import { combineReducers } from "redux";
import userListReducer from "./usersReducer";
import { reducer as formReducer } from "redux-form";


export default combineReducers({
	users: userListReducer,
	form: formReducer
})