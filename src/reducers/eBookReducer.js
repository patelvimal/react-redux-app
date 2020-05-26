import { GET_BOOKS } from "../constants/action-type"

const initial_state = {
    list: []
}

const eBookReducer = (state = initial_state, action) => {
    switch(action.type) {
        case GET_BOOKS:
            return { list: action.payload }
        default:
            return state;
    }
}

export default eBookReducer;