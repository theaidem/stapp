import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {getImageSrc} from '../utils'
import {appRoutes} from '../router'

class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <img src={getImageSrc('logo.png')} style={{width: 25, paddingRight: 5}}/>
                <Link to={appRoutes.home}>Home</Link>
                <Link to={appRoutes.info}>Info</Link>
                <Link to="/unknown">Unknown route</Link>
            </header>
        )
    }
}

export default Header
