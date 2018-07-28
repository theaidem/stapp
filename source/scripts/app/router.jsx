import React from 'react'
import App from './AppContainer'
import Layout from './common/Layout'
import Home from '../home/Home'
import Info from '../info/Info'
import NotFound from './common/NotFound'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {createBrowserHistory, createHashHistory} from 'history'

// Use hash location for Github Pages
// otherwise switch to HTML5 history.
const historyType = process.env.GH_PAGES ? createHashHistory() : createBrowserHistory()

const RouteWithLayout = ({layout, component, ...rest}) => (
    <Route {...rest} render={(props) =>
        React.createElement( layout, props, React.createElement(component, props))
    }/>
)

export const appRoutes = {
    home: '/',
    info: '/info',
}

export const getRouter = () => {
    return (
        <ConnectedRouter history={historyType}>
            <div className="root">
                <App>
                    <Switch>
                        <RouteWithLayout layout={Layout} exact path={appRoutes.home} component={Home}/>
                        <RouteWithLayout layout={Layout} exact path={appRoutes.info} component={Info}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </App>
            </div>
        </ConnectedRouter>
    )
}
