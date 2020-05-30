
const initial_state = {
    list: []
}

const rootReducer = (state = initial_state, action) => {
    switch(action.type) {
        case '':
            return { list: action.payload }
        default:
            return state;
    }
}

export default rootReducer;