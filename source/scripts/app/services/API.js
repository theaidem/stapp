import 'whatwg-fetch'
import {
    CONFIG
} from '../config'

export default class API {

    static request = (endpoint, method, body, token = null) => {
        const options = {
            method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        if (body) {
            options.body = JSON.stringify(body)
        }

        if (token) {
            options.headers.Authorization = `Bearer ${token}`
        }

        return fetch(`${CONFIG.API_ROOT}/${endpoint}`, options).then((response) => {

            if (response.status === 204) {
                return null
            }

            if (method == 'DELETE') {
                return response.status
            }
            return response.json()
        }).catch((err) => {
            throw err
        })
    }

    static uploadFile = (endpoint, file, token) => {
        const data = new FormData()
        data.append('file', file)
        const options = {
            method: 'POST',
            body: data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        return fetch(`${CONFIG.API_ROOT}/${endpoint}`, options).then((response) => {
            if (response.status === 204) {
                return null
            }
            return response.json()
        }).catch((err) => {
            throw err
        })
    }

}
