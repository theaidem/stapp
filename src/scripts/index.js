import '../styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { router } from "./constants/router"
import { configureStore } from "./store/configureStore"
import { Provider } from 'react-redux'

const start = (store = configureStore()) => 
	ReactDOM.render(<Provider store={store}>{ router }</Provider>, document.getElementById('stapp'))
start()

