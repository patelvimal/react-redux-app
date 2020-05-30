import api from '../../shared/apis';
import { GET_PRODUCTS, SHOW_DIALOG, CLOSE_DIALOG } from './actionTypes';


export const getDialogStatus = (status) => async dispatch => {
    dispatch({ type: SHOW_DIALOG, payload: status })
}

export const closeDialog = { type: CLOSE_DIALOG};