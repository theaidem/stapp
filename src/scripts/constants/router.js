import React from 'react'
import App from '../containers/App'
import Main from '../components/Main'
import Home from '../components/Home'
import About from '../components/About'
import NotFound from '../components/NotFound'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
//import { createHistory } from 'history'

import createBrowserHistory from 'history/lib/createBrowserHistory'
import createHashHistory from 'history/lib/createHashHistory'

// Use hash location for Github Pages
// otherwise switch to HTML5 history.
const createHistory = process.env.GH_PAGES ? createHashHistory : createBrowserHistory

export const router = (
	<Router history={ createHistory() }>
		<Route component={ App }>

			<Route path="/" component={ Home }/>
			<Route path="about" component={ About }/>

		</Route>
		<Route path="*" component={ NotFound }/>
	</Router>
)