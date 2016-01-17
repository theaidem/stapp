import React, { Component } from 'react'

class Error extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { err } = this.props
		return (
			<div className="ui active inverted dimmer">
				<div className="middle">
					<h2 className="ui aligned icon red header">
						<i className="warning sign icon"></i>
						Application error
						<div className="sub header">{ err }</div>
					</h2>
				</div>
			</div>
		)
	}
}

export default Error
