const action = (strings) => (`
import API from '../services/API'
import {
    serialize
} from '../constants/utils'

export const ${strings.singularUpper}_LOAD_REQUEST = '${strings.singularUpper}_LOAD_REQUEST'
export const ${strings.singularUpper}_LOAD_SUCCESS = '${strings.singularUpper}_LOAD_SUCCESS'
export const ${strings.singularUpper}_LOAD_FAILURE = '${strings.singularUpper}_LOAD_FAILURE'

export const ${strings.pluralUpper}_LOAD_REQUEST = '${strings.pluralUpper}_LOAD_REQUEST'
export const ${strings.pluralUpper}_LOAD_SUCCESS = '${strings.pluralUpper}_LOAD_SUCCESS'
export const ${strings.pluralUpper}_LOAD_FAILURE = '${strings.pluralUpper}_LOAD_FAILURE'

export const ${strings.singularUpper}_CREATE_REQUEST = '${strings.singularUpper}_CREATE_REQUEST'
export const ${strings.singularUpper}_CREATE_SUCCESS = '${strings.singularUpper}_CREATE_SUCCESS'
export const ${strings.singularUpper}_CREATE_FAILURE = '${strings.singularUpper}_CREATE_FAILURE'

export const ${strings.singularUpper}_UPDATE_REQUEST = '${strings.singularUpper}_UPDATE_REQUEST'
export const ${strings.singularUpper}_UPDATE_SUCCESS = '${strings.singularUpper}_UPDATE_SUCCESS'
export const ${strings.singularUpper}_UPDATE_FAILURE = '${strings.singularUpper}_UPDATE_FAILURE'

export const ${strings.singularUpper}_DELETE_REQUEST = '${strings.singularUpper}_DELETE_REQUEST'
export const ${strings.singularUpper}_DELETE_SUCCESS = '${strings.singularUpper}_DELETE_SUCCESS'
export const ${strings.singularUpper}_DELETE_FAILURE = '${strings.singularUpper}_DELETE_FAILURE'

/* Load ${strings.singularCap} */

const ${strings.singular}LoadRequest = () => ({
    type: ${strings.singularUpper}_LOAD_REQUEST
})

const ${strings.singular}LoadSuccess = (data) => ({
    type: ${strings.singularUpper}_LOAD_SUCCESS,
    data
})

const ${strings.singular}LoadFailure = (err = 'Something went wrong') => ({
    type: ${strings.singularUpper}_LOAD_FAILURE,
    err
})

export const doLoad${strings.singularCap} = (id) => (dispatch) => {

    dispatch(${strings.singular}LoadRequest())

    return API.request(\`${strings.singular}/\${id}\`, 'GET').then((data) => {

        if (data.error) {
            dispatch(${strings.singular}LoadFailure(data))
            return
        }
        dispatch(${strings.singular}LoadSuccess(data))
        return

    }, (error) => {
        dispatch(${strings.singular}LoadFailure(error))
    })

}

/* Load ${strings.pluralCap} */

const ${strings.plural}LoadRequest = () => ({
    type: ${strings.pluralUpper}_LOAD_REQUEST
})

const ${strings.plural}LoadSuccess = (data) => ({
    type: ${strings.pluralUpper}_LOAD_SUCCESS,
    data
})

const ${strings.plural}LoadFailure = (err = 'Something went wrong') => ({
    type: ${strings.pluralUpper}_LOAD_FAILURE,
    err
})

export const doLoad${strings.pluralCap} = (query = null) => (dispatch) => {

    dispatch(${strings.plural}LoadRequest())

    let path = '${strings.plural}'

    if (query) {
        path = \`\${path}\${serialize(query)}\`
    }

    return API.request(path, 'GET').then((data) => {

        if (data.error) {
            dispatch(${strings.plural}LoadFailure(data))
            return
        }

        dispatch(${strings.plural}LoadSuccess(data))
        return

    }, (error) => {
        dispatch(${strings.plural}LoadFailure(error))
    })

}

/* Create ${strings.singularCap} */

const ${strings.singular}CreateRequest = () => ({
    type: ${strings.singularUpper}_CREATE_REQUEST
})

const ${strings.singular}CreateSuccess = (data) => ({
    type: ${strings.singularUpper}_CREATE_SUCCESS,
    data
})

const ${strings.singular}CreateFailure = (err = 'Something went wrong') => ({
    type: ${strings.singularUpper}_CREATE_FAILURE,
    err
})

export const doCreate${strings.singularCap} = (${strings.singular}) => (dispatch) => {

    dispatch(${strings.singular}CreateRequest())

    return API.request('${strings.singular}', 'POST', ${strings.singular}).then((data) => {

        if (data.error) {
            dispatch(${strings.singular}CreateFailure(data))
            return
        }

        dispatch(${strings.singular}CreateSuccess(data))
        return

    }, (error) => {
        dispatch(${strings.singular}CreateFailure(error.message))
    })
}

/* Update ${strings.singularCap} */

const ${strings.singular}UpdateRequest = () => ({
    type: ${strings.singularUpper}_UPDATE_REQUEST
})

const ${strings.singular}UpdateSuccess = (data) => ({
    type: ${strings.singularUpper}_UPDATE_SUCCESS,
    data
})

const ${strings.singular}UpdateFailure = (err = 'Something went wrong') => ({
    type: ${strings.singularUpper}_UPDATE_FAILURE,
    err
})

export const doUpdate${strings.singularCap} = (id, ${strings.singular}) => (dispatch) => {

    dispatch(${strings.singular}UpdateRequest())

    return API.request(\`${strings.singular}/\${id}\`, 'PUT', ${strings.singular}).then((data) => {

        if (data.error) {
            dispatch(${strings.singular}UpdateFailure(data))
            return
        }

        dispatch(${strings.singular}UpdateSuccess(data))
        return

    }, (error) => {
        dispatch(${strings.singular}UpdateFailure(error.message))
    })
}

/* Delete ${strings.singularCap} */

const ${strings.singular}DeleteRequest = () => ({
    type: ${strings.singularUpper}_UPDATE_REQUEST
})

const ${strings.singular}DeleteSuccess = (data) => ({
    type: ${strings.singularUpper}_UPDATE_SUCCESS,
    data
})

const ${strings.singular}DeleteFailure = (err = 'Something went wrong') => ({
    type: ${strings.singularUpper}_UPDATE_FAILURE,
    err
})

export const doDelete${strings.singularCap} = (id) => (dispatch) => {

    dispatch(${strings.singular}DeleteRequest())

    return API.request(\`${strings.singular}/\${id}\`, 'DELETE').then((data) => {

        if (data.error) {
            dispatch(${strings.singular}DeleteFailure(data))
            return
        }

        dispatch(${strings.singular}DeleteSuccess(data))
        return

    }, (error) => {
        dispatch(${strings.singular}DeleteFailure(error.message))
    })
}
`)

module.exports = action
