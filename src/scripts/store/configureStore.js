import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'
import reducers from '../reducers'

export function configureStore(initialState = {}) {

	const logger = createLogger({collapsed: true});
	
	let middlewares = [ logger, thunk ];

	const store = compose(

		applyMiddleware(...middlewares)

	)(createStore)(reducers, initialState);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
