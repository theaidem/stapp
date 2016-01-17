import { APP_INIT_REQUEST, APP_INIT_SUCCESS, APP_INIT_FAILURE } from "../constants/actions"

const initState = {
	 isLoading: true,
	 err: null
}

export default function app(state = initState, action) {

	switch (action.type) {
		
		case APP_INIT_REQUEST:
			return Object.assign({}, state, {})

		case APP_INIT_SUCCESS:
			return Object.assign({}, state, {isLoading: false})

		case APP_INIT_FAILURE:
			return Object.assign({}, state, {isLoading: false, err: action.err})

		default:
			return state
	}

}
