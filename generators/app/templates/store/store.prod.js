import {createStore, applyMiddleware} from 'redux'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

export default function configureStore() {
    const reduxRouterMiddleware = routerMiddleware(browserHistory)
    
    return createStore(reducer, {}, applyMiddleware(thunk, reduxRouterMiddleware))
}
