import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import productReducer from "../containers/ProductPage/productReducer";
import { reducer as formReducer} from "redux-form";
import apiReducer from "../store/middleware/reducer";


export default combineReducers({
	app: rootReducer,
	product: productReducer,
	form: formReducer,
	api:apiReducer
})