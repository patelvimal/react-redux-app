import api from '../../shared/apis';
import { GET_PRODUCTS, SAVE_PRODUCT } from './actionTypes';

export const getProducts = {
    type: GET_PRODUCTS,
    meta: {
        url: '/products',
        method: 'GET'
    }
}


// export const getProducts = () => async dispatch => {
//     const response = await api.get('/products');
//     dispatch({ type: GET_PRODUCTS, payload: response.data, })
// }

export const saveProduct = (formValues) => async dispatch => {
    const response = await api.post('/products',formValues);
    dispatch({ type: SAVE_PRODUCT, payload: response.data })
}