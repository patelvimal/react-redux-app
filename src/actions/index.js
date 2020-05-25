import { GET_USERS, REGISTER } from "../constants/action-type"
import jsonPlaceHolder from '../apis';
export const getUsers = () => async dispatch => {
	const response = await jsonPlaceHolder.get('/posts');
	dispatch({ type: GET_USERS, payload: response.data })
};

export const registerUser = formValues => async  dispatch => {
	const response = await jsonPlaceHolder.post('/users',formValues);
	console.log(response);
	dispatch({type:REGISTER, payload:response.data});
}