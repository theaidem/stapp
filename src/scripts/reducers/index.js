import { combineReducers } from 'redux'
import app from './app'
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
	route: routeReducer,
	app
})

export default rootReducer
