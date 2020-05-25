import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar/>
                    <Route path='/' render={()=> (<h2>hello</h2>)}/>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/register' component={Register}/>
			</BrowserRouter>
		</div>
	);
};

export default App;