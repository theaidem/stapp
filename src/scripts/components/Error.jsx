import React, { Component } from 'react'

class Error extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { err } = this.props
        return (
            <div>
                <div className="middle">
                    <h2>😨 Application error</h2>
                    <div>{ err }</div>
                </div>
            </div>
        )
    }
}

export default Error
