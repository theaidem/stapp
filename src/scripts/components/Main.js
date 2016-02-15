import React, { Component } from 'react'
import Menu from './Menu'

class Main extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { children } = this.props

		return (
			<div className="ui main grid">
				<div className="ui row">
					<div className="ui container">
						<Menu { ...this.props }/>
					</div>
				</div>
				
				<div className="ui row">
					<div className="ui container">
						{ children }
					</div>
				</div>
			</div>
		)
	}
}

export default Main
