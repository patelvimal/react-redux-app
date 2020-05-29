import { CLOSE_MODAL_DIALOG } from "../constants/action-type";

const initial_state = {
    show:false
}

const modalDialogReducer = (state = initial_state, action) => {
    switch(action.type) {
        case CLOSE_MODAL_DIALOG:
            return { show: false }
        default:
            return state;
    }
}

export default modalDialogReducer;