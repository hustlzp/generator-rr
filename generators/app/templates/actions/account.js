import {push} from 'react-router-redux'
import * as auth from '../auth'

/**
 * 登录
 */

export const LOG_IN = "LOG_IN"

export function logIn(user) {
    return dispatch => {
        auth.logIn(user)

        dispatch({type: LOG_IN, user})
        dispatch(push('/'))
    }
}

/**
 * 登出
 */

export const LOG_OUT = "LOG_OUT"

export function logOut(session) {
    return dispatch => {
        auth.logOut()

        dispatch({type: LOG_OUT})
        dispatch(push('/'))
    }
}
