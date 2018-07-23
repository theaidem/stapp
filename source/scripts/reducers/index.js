import app from './app'
import {combineReducers} from 'redux'

// eslint-disable-next-line no-unused-vars
const action = (state = null, action) => (action.type)

const rootReducer = combineReducers({
    app,
    action
})

export default rootReducer
