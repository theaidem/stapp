import {push} from 'connected-react-router'

export const APP_CLEAR_ERRS = 'APP_CLEAR_ERRS'
export const APP_INIT_REQUEST = 'APP_INIT_REQUEST'
export const APP_INIT_SUCCESS = 'APP_INIT_SUCCESS'
export const APP_INIT_FAILURE = 'APP_INIT_FAILURE'

export const appRedirect = path => {
    return function (dispatch) {
        dispatch(push(path))
    }
}

export const appClearErrs = () => {
    return {
        type: APP_CLEAR_ERRS
    }
}

const appInitRequest = () => {
    return {
        type: APP_INIT_REQUEST
    }
}

const appInitSuccess = () => {
    return {
        type: APP_INIT_SUCCESS
    }
}

// eslint-disable-next-line no-unused-vars
const appInitFailure = (err = 'Something went wrong') => {
    return {
        type: APP_INIT_FAILURE,
        err
    }
}

export const doAppInit = () => {
    return function (dispatch) {

        dispatch(appInitRequest())

        //Emulate async operation,
        //here you may call XHR to your backend
        //and dispatch `appInitSuccess` or `appInitFailure` actions
        setTimeout(() => (dispatch(appInitSuccess())), 1000)

    }
}
