import React from 'react'
import Radium from 'radium'

@Radium
export default class ExampleComponent extends React.Component {
    state = {
    }

    static defaultProps = {
    }

    static propTypes = {
        someFunc: React.PropTypes.func.isRequired
    }

    render() {
        const { someFunc } = this.props

        return (
            <div>

            </div>
        )
    }
}

const styles = {

}
