import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {getImageSrc} from '../constants/utils'

class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <img src={getImageSrc('logo.png')} style={{width: 25, paddingRight: 5}}/>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/unknown">Unknown</Link>
            </header>
        )
    }
}

export default Header
