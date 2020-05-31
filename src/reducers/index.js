import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import productReducer from "../containers/ProductPage/productReducer";
import { reducer as formReducer} from "redux-form";


export default combineReducers({
	app: rootReducer,
	product: productReducer,
	form: formReducer
})