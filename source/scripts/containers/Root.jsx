import React from 'react'
import {Provider} from 'react-redux'
import {getRouter} from '../router'

export default function Root({store}) {
    return (
        <Provider store={store}>{getRouter(store)}</Provider>
    )
}
