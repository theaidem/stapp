import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { syncHistory } from 'redux-simple-router'
import { createHistory } from 'history'

export function configureStore(initialState = {}) {

	const router = syncHistory(createHistory())
	const logger = createLogger({ collapsed: true })
	
	let middlewares = [ router, logger, thunk ]

	const store = compose(

		applyMiddleware(...middlewares)

	)(createStore)(reducers, initialState)

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
