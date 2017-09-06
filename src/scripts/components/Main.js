import React, { Component } from 'react'
import Menu from './Menu'

class Main extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { children } = this.props

		return (
			<div>
				<div>
					<Menu { ...this.props }/>
				</div>
			
				<div>
					{ children }
				</div>

				<footer>
					footer
				</footer>
			</div>
		)
	}
}

export default Main
