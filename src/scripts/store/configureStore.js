import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { syncHistory } from 'react-router-redux'
//import { createHistory } from 'history'

import createBrowserHistory from 'history/lib/createBrowserHistory'
import createHashHistory from 'history/lib/createHashHistory'

export function configureStore(initialState = {}) {

	// Use hash location for Github Pages
	// otherwise switch to HTML5 history.
	const createHistory = process.env.GH_PAGES ? createHashHistory : createBrowserHistory

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
