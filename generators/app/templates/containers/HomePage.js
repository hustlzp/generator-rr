import React from 'react'
import Radium from 'radium'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const RadiumLink = Radium(Link)

@Radium
export default class HomePage extends React.Component {
    state = {}

    componentDidMount() {

    }

    static defaultProps = {}

    static propTypes = {}

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

const styles = {}

function mapStateToProps(state) {
    return state.account
}

export default connect(mapStateToProps)(HomePage)
