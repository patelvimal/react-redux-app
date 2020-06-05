
const initial_state = {
    list: [],
    redirect:false
}

const rootReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'REDIRECT':
            return { redirect: true }
        default:
            return state;
    }
}

export default rootReducer;