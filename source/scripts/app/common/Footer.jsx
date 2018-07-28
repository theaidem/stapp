import React, {Component} from 'react'

class Footer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer>
                © {new Date().getFullYear()}
            </footer>
        )
    }
}

export default Footer
