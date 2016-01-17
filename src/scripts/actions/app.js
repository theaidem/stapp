import { APP_INIT_REQUEST, APP_INIT_SUCCESS, APP_INIT_FAILURE } from "../constants/actions"

function appInitRequest() {
	return {
		type: APP_INIT_REQUEST
	}
}

function appInitSuccess() {
	return {
		type: APP_INIT_SUCCESS
	}
}

function appInitFailure(err = "Something went wrong") {
	return {
		type: APP_INIT_FAILURE,
		err
	}
}

export function doAppInit() {
	return function (dispatch) {

		dispatch(appInitRequest())

		//Emulate async operation, 
		//here you may call XHR to your backend 
		//and dispatch `appInitSuccess` or `appInitFailure` actions
		setTimeout(() => (dispatch(appInitSuccess())), 1000)
		
	}
}