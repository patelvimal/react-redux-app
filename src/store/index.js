import { applyMiddleware, createStore,compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import apiMiddleware from "./middleware/apiMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk,apiMiddleware)
));

export default store;