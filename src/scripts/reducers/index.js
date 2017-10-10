import app from './app'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

// eslint-disable-next-line no-unused-vars
const action = (state = null, action) => (action.type)

const rootReducer = combineReducers({
    routing: routerReducer,
    app, action
})

export default rootReducer
