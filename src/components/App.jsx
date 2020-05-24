import React from 'react';
import UserList from './UserList';
import Login  from './Login';

const App = () => {
	return (
		<div className="App">
			<h1>Welcome to React Redux App</h1>
			<UserList/>
			<Login/>
		</div>
	);
};

export default App;