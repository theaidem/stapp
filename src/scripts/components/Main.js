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


				<div className="ui vertical footer row segment">
					<div className="ui center aligned container">
						<div className="ui section divider"></div>
						<div className="ui horizontal small divided link list">
							<a className="item" href="#">Site Map</a>
							<a className="item" href="#">Contact Us</a>
							<a className="item" href="#">Terms and Conditions</a>
							<a className="item" href="#">Privacy Policy</a>
						</div>
					</div>
				</div>


			</div>
		)
	}
}

export default Main
