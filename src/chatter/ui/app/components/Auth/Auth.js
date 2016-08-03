import { Component, createFactory, DOM, PropTypes } from 'react'
import styles from './Auth.ncss'

const {div, input, p} = DOM

export default
createFactory(class Auth extends Component {

    static propTypes = {
        onSelect: PropTypes.func
    }

    constructor() {
        super()

        this.state = {
            username: ""
        }
    }

    select = () => {
        this.props.onSelect(this.state.username)
    }

    render() {
        const {username} = this.state

        return (
            div({className: styles.auth},
                input({
                    className: styles.input,
                    value: username,
                    placeholder: "Username",
                    onChange: e => this.setState({username: e.target.value})
                }),

                div({className: styles.button, onClick: this.select},
                    p({}, "Pick Username")
                )
            )
        )
    }
})
