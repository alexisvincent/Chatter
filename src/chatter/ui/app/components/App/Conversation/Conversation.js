import { Component, createFactory, DOM, PropTypes } from 'react'
import styles from './Conversation.ncss'
import { ifElse } from '../../../utils/index.js'

const {div, input, p, form} = DOM

export default
createFactory(class Conversation extends Component {

    static propTypes = {
        conversation: PropTypes.object
    }

    constructor() {
        super()

        this.state = {
            message: ""
        }
    }

    send = e => {
        if (typeof e.preventDefault === 'function') {
            e.preventDefault()
        }

        const {message} = this.state

        if (message && message != "") {
            // send

            this.setState({message: ""})
        }
    }

    render() {
        const {conversation} = this.props
        const {message} = this.state

        const hasConversation = ifElse(conversation)
        const isDisabled = ifElse(!message || message == "")

        return (
            div({className: styles.container},
                hasConversation(
                    () => (
                        div({className: styles.conversation},
                            div({className: styles.conversationHeader},
                                p({}, conversation.username)
                            ),

                            div({className: styles.messages},
                                div({className: styles.message},
                                    p({}, "hello there")
                                ),

                                div({className: `${styles.message} ${styles.right}`},
                                    p({}, "hello there")
                                ),
                                div({className: `${styles.message} ${styles.right}`},
                                    p({}, "how are you")
                                )
                            ),

                            form({className: styles.prompt, onSubmit: this.send},
                                input({
                                    value: message,
                                    placeholder: "Say Something",
                                    onChange: e => this.setState({message: e.target.value})
                                }),

                                div({className: `${styles.button} ${isDisabled(styles.disabled, "")}`, onClick: this.send},
                                    p({}, "send")
                                )
                            )
                        )
                    ),

                    div({className: styles.unselected},
                        p({}, "no conversation has been selected")
                    )
                )
            )
        )
    }
})