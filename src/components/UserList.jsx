import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UserList extends Component {

	render() {
		return (
			<div>
				<h2>User List</h2>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.userList
})

export default connect(mapStateToProps)(UserList)
