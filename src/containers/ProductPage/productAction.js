import api from '../../shared/apis';
import { GET_PRODUCTS } from './actionTypes';

export const getProducts = () => async dispatch => {
    const response = await api.get('/products');
    dispatch({ type: GET_PRODUCTS, payload: response.data })
}