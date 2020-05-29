import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

//* Almacenamiento
const store = createStore(
	reducers, // Todos los reduces
	{} // Estado inicial
);

ReactDOM.render(
	// todo lo que este en la const store app podrá tener acceso para manejar todos esos estados
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
