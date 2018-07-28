const view = (strings) => (`
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Load from '../app/common/Load'
import * as ${strings.singularCap}Actions from './${strings.singularCap}Actions'

class ${strings.singularCap}View extends Component {

    constructor(props) {
        super(props)
        props.doLoad${strings.singularCap}()
    }

    render() {
        const {${strings.singular}} = this.props
        if (!${strings.singular}) return <Load text={'Loading ${strings.singular}'}/>
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
