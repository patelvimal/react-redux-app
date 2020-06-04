import { API_START, API_END } from "./acionType";

const initial_state = {
    loading:false
}

const apiReducer = (state = initial_state,action)=>{
    switch (action.type){
        case API_START:
            return {loading:true}
        case API_END:
            return {loading:false}
        default:
            return state;
    }
}

export default apiReducer;