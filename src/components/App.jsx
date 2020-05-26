import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import EBookList from './EBookList';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar/>
                    <Route path='/' component={EBookList}/>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/register' component={Register}/>
			</BrowserRouter>
		</div>
	);
};

export default App;