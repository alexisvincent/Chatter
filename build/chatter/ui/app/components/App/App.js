/**
 * Created by alexisvincent
 */
import React, {Component, createElement as $, createFactory} from 'react'
import {flowRight} from 'lodash'
import styles from './App.ncss'

const {div, input} = React.DOM

const App = flowRight()
(class C extends Component {
    render() {
        return (
            div({className: styles.app},
                div({className: styles.left},
                    div({className: styles.leftHeader}, 'leftHeader'),
                    div({className: styles.conversations},
                        [1, 2, 3].map((x) => {
                            return (
                                div({key: x, className: styles.conversationPreview}, "I am a potato")
                            )
                        })
                    )
                ),
                div({className: styles.right},
                    div({className: styles.rightHeader}, 'rightHeader'),
                    div({className: styles.conversation},
                        [1, 2, 3, 4].map((msg) => (
                            div({key: msg, className: msg % 2 == 0 ? styles.conversationLocal : styles.conversationRemote}, msg)
                        ))
                    ),
                    div({className: styles.prompt},
                        input({className: styles.input})
                    )
                )
            )
        )
    }
})

export default App