const list = (strings) => (`
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Load from '../app/common/Load'
import * as ${strings.singularCap}Actions from './${strings.singularCap}Actions'

class ${strings.singularCap}List extends Component {

    constructor(props) {
        super(props)
        props.doLoad${strings.pluralCap}()
    }

    render() {
        const {${strings.plural}} = this.props
        if (!${strings.plural}) return <Load text={'Loading ${strings.plural}'}/>
        return <div>Total ${strings.pluralCap} {${strings.plural}.length}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(${strings.singularCap}List)
`)

module.exports = list
