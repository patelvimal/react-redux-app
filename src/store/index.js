import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import userListReducer from "../reducers/usersReducer";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;