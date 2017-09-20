import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import { bindActionCreators } from 'redux'

class NotFound extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { back } = this.props

        return (
            <div>
                <div className="middle">
                    <h2>404 Page not found</h2>
                    <h3 onClick={() => back()}>👈 back</h3>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        back: goBack
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(NotFound)

