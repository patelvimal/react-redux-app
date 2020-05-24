import { GET_USERS } from "../constants/action-type"
import jsonPlaceHolder from '../apis';
export const getUsers = () => async dispatch => {
	const response = await jsonPlaceHolder.get('/posts');
	
	dispatch({ type: GET_USERS, payload: response.data })
};
