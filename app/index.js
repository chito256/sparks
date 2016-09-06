import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './renderer/store';
import Root from './renderer/Root';

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
);