import React from 'react';
import HomePage from '../Homepage';
import '../../assets/app.scss';
import LoadingBar from '../../components/LoadingBar/LoadingBar';
const App = () => {
	return (
		<div className="App">
			<HomePage/>
			<LoadingBar/>
		</div>
	);
};

export default App;