import { createStore } from "redux";
import { userListReducer } from "../reducers";

const store = createStore(userListReducer);

export default store;