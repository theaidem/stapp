import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Tpl extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount = () => {}

    componentDidMount = () => {}

    componentWillReceiveProps = (nextProps) => {}

    shouldComponentUpdate = (nextProps, nextState) => {
        return true
    }

    componentWillUpdate = (nextProps, nextState) => {}

    componentDidUpdate = (nextProps, nextState) => {}

    componentWillUnmount = () => {}

    render() {
        return null
    }

}

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tpl)
