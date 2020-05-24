import { GET_USERS } from "../constants/action-type";

const initial_state = {
	userList: null
}

const userListReducer = (state = initial_state, action) => {
	switch (action.type) {
		case GET_USERS:
			console.log(action);
			return { userList: action.payload};
		default:
			return state;
	}
};

export default userListReducer;