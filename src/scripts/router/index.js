import React from 'react'
import App from '../containers/App'
import Home from '../components/Home'
import About from '../components/About'
import NotFound from '../containers/NotFound'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory, createHashHistory  } from 'history'

// Use hash location for Github Pages
// otherwise switch to HTML5 history.
const historyType = process.env.GH_PAGES ? createHashHistory() : createBrowserHistory()

export function getRouter(store = null) {
	return (
		<ConnectedRouter history={historyType}>
			<div className='root'>
				<Switch>
		      <App>
						<Switch>
			        <Route exact path="/" component={Home}/>
			        <Route path="/about" component={About}/>
							<Route path="*" component={ NotFound }/>
						</Switch>
		      </App>
				</Switch>
			</div>
    </ConnectedRouter>
	)
}
