import { Component, createFactory, DOM, PropTypes } from 'react'
import _ from 'lodash'
import { ifElse } from '../../../utils/index.js'
import styles from './Sidebar.ncss'

const {div, input, p} = DOM

export default
createFactory(class Conversation extends Component {

    static propTypes = {
        conversations: PropTypes.any,
        onSelect: PropTypes.func
    }

    constructor() {
        super()

        this.state = {}
    }

    render() {
        const {conversations, username, onSelect} = this.props

        const hasConversations = ifElse(conversations && _.size(conversations))

        return (
            div({className: styles.container},
                div({className: styles.sidebarHeader},
                    p({}, "username: ", username)
                ),

                div({className: styles.conversations},
                    hasConversations(
                        _.map(conversations, (conversation, key) => (
                                div({className: styles.conversation, key, onClick: () => onSelect(conversation)},
                                    p({}, conversation.username)
                                )
                            )
                        ),

                        div({className: styles.isEmpty},
                            p({}, "No Conversations")
                        )
                    )
                )
            )
        )
    }
})