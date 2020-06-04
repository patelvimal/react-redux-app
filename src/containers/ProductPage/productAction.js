import api from '../../shared/apis';
import { GET_PRODUCTS, SAVE_PRODUCT } from './actionTypes';

export const getProducts = {
    type: GET_PRODUCTS,
    api: {
        url: '/products',
        method: 'GET'
    }
}


export const saveProduct = (formValues) => ({
    type: SAVE_PRODUCT,
    api: {
        url: '/products',
        method: 'POST',
        data: formValues
    }
})

// export const getProducts = () => async dispatch => {
//     const response = await api.get('/products');
//     dispatch({ type: GET_PRODUCTS, payload: response.data, })
// }

// export const saveProduct = (formValues) => async dispatch => {
//     const response = await api.post('/products',formValues);
//     dispatch({ type: SAVE_PRODUCT, payload: response.data })
// }