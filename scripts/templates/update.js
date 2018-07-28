const update = (strings) => (`
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as ${strings.singularCap}Actions from './${strings.singularCap}Actions'

class ${strings.singularCap}Update extends Component {

    constructor(props) {
        super(props)
        props.doLoad${strings.singularCap}()
        this.state = {
            ${strings.singular}: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.action === ${strings.singularCap}Actions.${strings.pluralUpper}_LOAD_SUCCESS) {
            this.setState({${strings.singular}: nextProps.${strings.singular}})
        }
    }

    render() {
        const {${strings.singular}} = this.state
        return <div>${strings.singularCap} {${strings.singular}.id}</div>
    }

}

const mapStateToProps = (state) => ({
    action: state.action,
    ...state.${strings.singular}
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        ...${strings.singularCap}Actions
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(${strings.singularCap}Update)
`)

module.exports = update
