import React, { Component } from 'react'

class NotFound extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="ui active inverted dimmer">
				<div className="middle">
					<h2 className="ui aligned icon blue header">
						<i className="browser icon"></i>
						404
						<div className="sub header">Page not found</div>
					</h2>
				</div>
			</div>
		)
	}
}

export default NotFound
