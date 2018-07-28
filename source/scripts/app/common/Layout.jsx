import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {children} = this.props

        return (
            <div>
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
}

export default Layout
