import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Load from './common/Load'
import Error from './common/Error'
import * as AppActions from './AppActions'

class App extends Component {

    constructor(props) {
        super(props)
        this.props.doAppInit()
    }

    render() {
        const {isLoading, children, err} = this.props
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
