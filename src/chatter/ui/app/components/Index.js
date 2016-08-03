import { Component, createFactory, PropTypes, DOM } from 'react'
const {div} = DOM

import { ifElse } from '../utils/index.js'

import styles from './_Index.ncss'
import Auth from './Auth/Auth.js'
import App from './App/App.js'

export default
class index extends Component {

    constructor() {
        super()

        this.state = {
            username: ""
        }
    }

    render() {
        const {username} = this.state

        const hasSelectedUsername = ifElse(username && username != "")

        return (
            div({className: styles.container},
                hasSelectedUsername(
                    () => App({username}),
                    () => Auth({onSelect: username => this.setState({username})})
                )
            )
        )
    }
}