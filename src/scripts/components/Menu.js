import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="ui secondary pointing menu">
				<Link className="item" to="/">Home</Link>
				<Link className="item" to="/about">About</Link>
				<div className="right menu">
					<Link className="item" to="/login">Login</Link>
				</div>
			</div>
		)
	}
}

export default Menu
