import React from 'react'
import App from '../containers/App'
import Main from '../components/Main'
import Home from '../components/Home'
import About from '../components/About'
import NotFound from '../containers/NotFound'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory, createHashHistory  } from 'history'

// Use hash location for Github Pages
// otherwise switch to HTML5 history.
const historyType = process.env.GH_PAGES ? createHashHistory() : createBrowserHistory()

function RouteWithLayout({layout, component, ...rest}){
    return (
        <Route {...rest} render={(props) =>
            React.createElement( layout, props, React.createElement(component, props))
        }/>
    )
}

export function getRouter() {
    return (
        <ConnectedRouter history={historyType}>
            <div className='root'>
                <App>
                    <Switch>
                        <RouteWithLayout layout={Main} exact path="/" component={Home}/>
                        <RouteWithLayout layout={Main} exact path="/about" component={About}/>
                        <Route path="*" component={ NotFound }/>
                    </Switch>
                </App>
            </div>
        </ConnectedRouter>
    )
}
