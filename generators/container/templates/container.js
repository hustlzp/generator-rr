import React from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'

@Radium
class <%= name %> extends React.Component {
    state = {
    }

    componentDidMount() {
        const {dispatch} = this.props

    }

    render() {
        const {dispatch} = this.props

        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const styles = {

}

export default connect(mapStateToProps)(<%= name %>)
