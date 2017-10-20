const create = (strings) => (`
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as ${strings.singularCap}Actions from '../actions/${strings.singular}'

class ${strings.singularCap}Create extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ${strings.singular}: {
                // some fields here
            }
        }
    }

    render() {
        //const {${strings.singular}} = this.state
        return <div>${strings.singularCap} create form</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(${strings.singularCap}Create)
`)

module.exports = create
