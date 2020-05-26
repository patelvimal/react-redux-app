import { combineReducers } from "redux";
import userListReducer from "./usersReducer";
import { reducer as formReducer } from "redux-form";
import eBookReducer from "./eBookReducer";


export default combineReducers({
	users: userListReducer,
	eBook: eBookReducer,
	form: formReducer
})