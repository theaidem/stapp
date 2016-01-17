import React from 'react'
import App from '../containers/App'
import Main from '../components/Main'
import Home from '../components/Home'
import About from '../components/About'
import NotFound from '../components/NotFound'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import { createHistory } from 'history'

export const router = (
	<Router history={ createHistory() }>
		<Route component={ App }>

			<Route path="/" component={ Home }/>
			<Route path="about" component={ About }/>

		</Route>
		<Route path="*" component={ NotFound }/>
	</Router>
)