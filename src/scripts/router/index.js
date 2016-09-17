import React from 'react'
import App from '../containers/App'
import Home from '../components/Home'
import About from '../components/About'
import NotFound from '../containers/NotFound'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Use hash location for Github Pages
// otherwise switch to HTML5 history.
const historyType = process.env.GH_PAGES ? hashHistory : browserHistory

export function getRouter(store) {
	const history = syncHistoryWithStore(historyType, store)

	return (
		<Router history={ history }>
			<Route component={ App }>

				<Route path="/" component={ Home }/>
				<Route path="about" component={ About }/>

			</Route>
			<Route path="*" component={ NotFound }/>
		</Router>
	)
}
