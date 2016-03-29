import React from 'react'
import Radium from 'radium'
import {connect} from 'react-redux'
import {logIn} from '../actions/account'

const Style = Radium.Style

@Radium
export default class LogInPage extends React.Component {
    state = {
        token: ''
    }

    componentDidMount() {

    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    static defaultProps = {}

    static propTypes = {}

    render() {

        return (
            <div>
                LogIn
            </div>
        )
    }
}


const styles = {}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(LogInPage)
