import React from 'react';
import UserList from './UserList';
import Login  from './Login';
import  Navbar  from './Navbar';
import { Link, BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar/>
                    <Route path='/' render={()=> (<h2>hello</h2>)}/>
					<Route exact path='/login' component={Login}/>
			</BrowserRouter>
		</div>
	);
};

export default App;