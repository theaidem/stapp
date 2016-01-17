import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main'
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
		return isLoading ? <Load/> : <Main children={ children } />
	}

}

App.propTypes = {
	isLoading: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
