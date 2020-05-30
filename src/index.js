import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';

function RootApp() {
	return (
		<Provider store={store}>
			<App/>
		</Provider>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<RootApp />, rootElement);
