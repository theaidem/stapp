import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NotFound extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="middle">
                <h2>404</h2>
                <Link to="/">home</Link>
            </div>
        )
    }
}

export default NotFound

