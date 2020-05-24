import React from 'react';
import UserList from './UserList';
import Login  from './Login';
import  Navbar  from './Navbar';

const App = () => {
	return (
		<div className="App">
			<Navbar/>
			<Login/>
		</div>
	);
};

export default App;