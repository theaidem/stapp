import app from './app'
import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
	route: routeReducer,
	app
})

export default rootReducer
