import React from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'

@Radium
class App extends React.Component {
    state = {}

    componentDidMount() {

    }

    static defaultProps = {}

    static propTypes = {}

    render() {

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

const styles = {}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(App)
