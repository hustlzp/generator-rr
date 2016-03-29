import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App'
import HomePage from './containers/HomePage'
import LogInPage from './containers/LogInPage'
import * as auth from './auth'

function requireLoggedIn(nextState, replace) {
    if (!auth.loggedIn()) {
        replace('/logIn')
    }
}

function requireVisitor(nextState, replace) {
    if (auth.loggedIn()) {
        replace('/')
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/login" component={LogInPage} onEnter={requireVisitor}/>
    </Route>
)
