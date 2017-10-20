const reducer = (strings) => (`
import {
    APP_CLEAR_ERRS
} from '../actions/app'
import {
    ${strings.singularUpper}_LOAD_SUCCESS,
    ${strings.pluralUpper}_LOAD_SUCCESS,
    ${strings.singularUpper}_LOAD_FAILURE,
    ${strings.pluralUpper}_LOAD_FAILURE,
    ${strings.singularUpper}_CREATE_FAILURE,
    ${strings.singularUpper}_UPDATE_FAILURE,
    ${strings.singularUpper}_DELETE_FAILURE,
} from '../actions/${strings.singular}'

const initState = {
    ${strings.singular}: null,
    ${strings.plural}: [],
    err: null
}

const ${strings.singular} = (state = initState, action) => {

    switch (action.type) {

    case APP_CLEAR_ERRS:
        return {
            ...state,
            err: null
        }

    case ${strings.singularUpper}_LOAD_FAILURE:
    case ${strings.pluralUpper}_LOAD_FAILURE:
    case ${strings.singularUpper}_CREATE_FAILURE:
    case ${strings.singularUpper}_UPDATE_FAILURE:
    case ${strings.singularUpper}_DELETE_FAILURE:
        return {
            ...state,
            err: action.err
        }

    case ${strings.singularUpper}_LOAD_SUCCESS:
        return {
            ...state,
            ${strings.singular}: action.data
        }

    case ${strings.pluralUpper}_LOAD_SUCCESS:
        return {
            ...state,
            ${strings.plural}: action.data
        }

    default:
        return state
    }

}

export default ${strings.singular}
`)

module.exports = reducer
