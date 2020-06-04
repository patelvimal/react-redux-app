import { API_START, API_END } from "./acionType";

const initial_state = {
    result:null,
    loading:false
}

const apiReducer = (state = initial_state,action)=>{
    switch (action.type){
        case API_START:
            return {...state, result:true}
        case API_END:
            return {...state, result:true}
        default:
            return state;
    }
}

export default apiReducer;