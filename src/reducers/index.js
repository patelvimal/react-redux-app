import { GET_USERS } from "../constants/action-type";


export const userListReducer = (state, action) => {
	switch (action.type) {
		case GET_USERS:

			break;
		default:
			return state;
			break;
	}
};