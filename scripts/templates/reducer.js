
const reducer = (strings, willGenerate) => {

    if (!willGenerate.includes('Actions')) return defaultReducer(strings)

    let content = [appImports()]
    let actionImports = []

    // Adding consts
    if (willGenerate.includes('Read actions')) {
        actionImports.push(
            `\n\t${strings.singularUpper}_LOAD_SUCCESS`,
            `\n\t${strings.pluralUpper}_LOAD_SUCCESS`,
            `\n\t${strings.singularUpper}_LOAD_FAILURE`,
            `\n\t${strings.pluralUpper}_LOAD_FAILURE`)
    }

    if (willGenerate.includes('Create actions')) actionImports.push(`\n\t${strings.singularUpper}_CREATE_FAILURE`)
    if (willGenerate.includes('Update actions')) actionImports.push(`\n\t${strings.singularUpper}_UPDATE_FAILURE`)
    if (willGenerate.includes('Delete actions')) actionImports.push(`\n\t${strings.singularUpper}_DELETE_FAILURE`)
    if (actionImports.length > 0) content.push(actionConstsImports(actionImports, strings))

    content.push(initState(strings))

    let cases = []
    let failCases = []

    if (willGenerate.includes('Read actions')) {
        failCases.push(
            `case ${strings.singularUpper}_LOAD_FAILURE:`,
            `case ${strings.pluralUpper}_LOAD_FAILURE:`)
    }

    if (willGenerate.includes('Create actions')) failCases.push(`case ${strings.singularUpper}_CREATE_FAILURE:`)
    if (willGenerate.includes('Update actions')) failCases.push(`case ${strings.singularUpper}_UPDATE_FAILURE:`)
    if (willGenerate.includes('Delete actions')) failCases.push(`case ${strings.singularUpper}_DELETE_FAILURE:`)
    if (willGenerate.includes('Read actions')) failCases.push(`return {...state,
        err: action.err
    }`)

    cases.push(failCases.join('\n'))

    if (willGenerate.includes('Read actions')) cases.push(readCases(strings))

    content.push(theReducer(strings, cases))

    return content.join('\n')
}

const defaultReducer = strings => (`
import {APP_CLEAR_ERRS} from '../app/AppActions'

const initState = {
    err: null
}

const ${strings.singular} = (state = initState, action) => {

    switch (action.type) {

    case APP_CLEAR_ERRS:
        return {...state,
            err: null
        }

    default:
        return state
    }

}

export default user`)

const appImports = () => ('import {APP_CLEAR_ERRS} from \'../app/AppActions\'')

const actionConstsImports = (actionImports, strings) => (
    `import {${actionImports.join(', ')}
} from './${strings.singular}Actions'`)

const initState = (strings) => (`
const initState = {
    ${strings.singular}: null,
    ${strings.plural}: [],
    err: null
}`)

const readCases = (strings) => (`
    case ${strings.singularUpper}_LOAD_SUCCESS:
        return {...state,
            ${strings.singular}: action.data
        }

    case ${strings.pluralUpper}_LOAD_SUCCESS:
        return {...state,
            ${strings.plural}: action.data
        }
`)

const theReducer = (strings, cases) => (`
const ${strings.singular} = (state = initState, action) => {

    switch (action.type) {

    case APP_CLEAR_ERRS:
        return {...state,
            err: null
        }

    ${cases.join('\n')}
    default:
        return state
    }

}

export default ${strings.singular}`)

module.exports = reducer
