import React, { Component } from 'react'
import Menu from './Menu'

class Main extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { children } = this.props

		return (
			<div className="main">
				<div className="ui vertical segment">
					<div className="ui grid container">
						<Menu { ...this.props }/>
					</div>
				</div>
				
				<div className="ui vertical segment">
					<div className="ui grid container">
						{ children }
					</div>
				</div>
			</div>
		)
	}
}

export default Main
