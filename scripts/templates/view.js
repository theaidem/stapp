const view = (strings) => (`
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as ${strings.singularCap}Actions from '../actions/${strings.singular}'

class ${strings.singularCap}View extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.doLoad${strings.singularCap}()
    }

    render() {
        const {${strings.singular}} = this.props
        if (!${strings.singular}) return <div>load...</div>
        return <div>${strings.singularCap} {${strings.singular}.id}</div>
    }

}

const mapStateToProps = (state) => ({
    ...state.${strings.singular}
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        ...${strings.singularCap}Actions
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(${strings.singularCap}View)
`)

module.exports = view
