import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import productReducer from "../containers/ProductPage/productReducer";


export default combineReducers({
	app: rootReducer,
	product: productReducer
})