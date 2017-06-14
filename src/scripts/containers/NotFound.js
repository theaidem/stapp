import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import { bindActionCreators } from 'redux'

class NotFound extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		const { back } = this.props

		return (
			<div className="ui active inverted dimmer">
				<div className="middle">
					<h2 className="ui aligned icon blue header">
						<i className="browser icon"></i>404
						<div className="sub header">
							<div>Page not found</div>
							<a className="" onClick={() => back()}>back</a>
						</div>
					</h2>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		back: goBack
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
