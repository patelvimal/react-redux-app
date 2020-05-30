import { GET_PRODUCTS } from "./actionTypes";


const initial_state = {
    products:[]
}

const productReducer = (state = initial_state,action)=> {
    switch (action.type) {
        case GET_PRODUCTS:
            return [action.payload];
        default:
            return state;

    }
}

export default productReducer;