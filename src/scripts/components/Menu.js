import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="ui secondary pointing menu">
				<Link className="item" to="/" activeClassName="active">Home</Link>
				<Link className="item" to="/about" activeClassName="active">About</Link>
				<div className="right menu">
					<Link className="item" to="/login" activeClassName="active">Login</Link>
				</div>
			</div>
		)
	}
}

export default Menu
