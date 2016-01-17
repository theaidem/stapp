import '../styles/index.css'

import { configureStore } from "./store/configureStore"
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './containers/App'

const start = (store = configureStore()) => 
	ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('stapp'))
start()

