import {createStore, applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {createBrowserHistory, createHashHistory} from 'history'

export default function configureStore(initialState = {}) {

    // Use hash location for Github Pages
    // otherwise switch to HTML5 history.
    const historyType = process.env.GH_PAGES ? createHashHistory() : createBrowserHistory()

    const router = routerMiddleware(historyType)
    let middlewares = [ router, thunk ]

    if (process.env.NODE_ENV !== 'production') {
        const logger = createLogger({collapsed: true, diff: true})
        middlewares.push(logger)
    }

    const store = compose(

        applyMiddleware(...middlewares)

    )(createStore)(connectRouter(historyType)(rootReducer), initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
