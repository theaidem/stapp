const list = (strings) => (`
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as ${strings.singularCap}Actions from '../../actions/${strings.singular}'

class ${strings.singularCap}List extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.doLoad${strings.pluralCap}()
    }

    render() {
        const {${strings.plural}} = this.props
        return <div>Total ${strings.pluralCap} {${strings.plural}.length()}</div>
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
