import React from 'react'
import Radium from 'radium'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const RadiumLink = Radium(Link)

@Radium
class HomePage extends React.Component {
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
    return {}
}

export default connect(mapStateToProps)(HomePage)
