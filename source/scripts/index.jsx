import '../styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {getRouter} from './app/router'
import configureStore from './app/store'
import {Provider} from 'react-redux'

const start = (store = configureStore()) =>
    ReactDOM.render(<Provider store={store}>{ getRouter(store) }</Provider>, document.getElementById('stapp'))
start()
