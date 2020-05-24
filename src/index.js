import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

function RootApp() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<RootApp />, rootElement);
