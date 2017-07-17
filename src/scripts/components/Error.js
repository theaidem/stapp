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
					<h2>
						<i></i>
						Application error
						<div>{ err }</div>
					</h2>
				</div>
			</div>
		)
	}
}

export default Error
