import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Menu extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default Menu
