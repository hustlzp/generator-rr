import update from 'react-addons-update'
import {createReducer, initLeanCloud} from '../utils'
import * as actionType from '../actions/account'
import {loggedIn, getLoggedInUser} from '../auth'

export default createReducer({loggedIn: loggedIn(), user: getLoggedInUser()}, {
    // 登录
    [actionType.LOG_IN](state, action) {
        return update(state, {
            loggedIn: {$set: true},
            user: {$set: action.user}
        })
    },

    // 登出
    [actionType.LOG_OUT](state, action) {
        return update(state, {
            loggedIn: {$set: false},
            user: {$set: null}
        })
    },

})
