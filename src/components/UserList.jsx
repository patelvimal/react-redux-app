import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

export class UserList extends Component {

	componentDidMount = () => {
		this.props.dispatch(getUsers());
	}

	render() {
		return (
			<div>
				<h2>User List</h2>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.users.userList
})

export default connect(mapStateToProps)(UserList)
