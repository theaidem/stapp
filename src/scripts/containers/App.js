import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Load from '../components/Load'
import Error from '../components/Error'
import * as AppActions from '../actions/app'

class App extends Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.doAppInit()
	}

	render() {
		const { isLoading, children, err } = this.props
		if (err) {return <Error err={err}/>}
		return isLoading ? <Load/> : children
	}

}

function mapStateToProps(state) {
	return {
		isLoading: state.app.isLoading,
		err: state.app.err
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(AppActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
