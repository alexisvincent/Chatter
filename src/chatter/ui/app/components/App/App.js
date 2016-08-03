import { Component, createFactory, DOM, PropTypes } from 'react'
import styles from './App.ncss'

const {div, input, p} = DOM
import Sidebar from './Sidebar/Sidebar.js'
import Conversation from './Conversation/Conversation.js'

export default
createFactory(class App extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired
    }

    constructor() {
        super()

        this.state = {
            conversations: [
                {
                    username: "john"
                },

                {
                    username: "doe"
                }
            ],
            selectedConversation: null
        }
    }

    selectConversation = conversation => {
        this.setState({
            selectedConversation: conversation
        })
    }

    render() {
        const {conversations, selectedConversation} = this.state
        const {username} = this.props

        return (
            div({className: styles.container},
                Sidebar({conversations, username, onSelect: this.selectConversation}),

                Conversation({conversation: selectedConversation})
            )
        )
    }
})
