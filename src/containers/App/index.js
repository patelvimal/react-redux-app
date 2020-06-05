import React from 'react';
import HomePage from '../Homepage';
import '../../assets/app.scss';
import LoadingBar from '../../components/LoadingBar/LoadingBar';
import { connect } from 'react-redux';

const App = (props) => {
	return (
		<div className="App">
			<HomePage />
			<LoadingBar />
		</div>
	);
};

export default App;