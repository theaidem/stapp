import {
    APP_CLEAR_ERRS,
    APP_INIT_SUCCESS,
    APP_INIT_FAILURE
} from './AppActions'

const initState = {
    isLoading: true,
    err: null
}

export default function app(state = initState, action) {

    switch (action.type) {

    case APP_CLEAR_ERRS:
        return {
            ...state,
            err: null
        }

    case APP_INIT_SUCCESS:
        return {
            ...state,
            isLoading: false
        }

    case APP_INIT_FAILURE:
        return {
            ...state,
            isLoading: false,
            err: action.err
        }

    default:
        return state
    }

}
