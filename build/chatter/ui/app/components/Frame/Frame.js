/**
 * Created by alexisvincent on 2016/08/01.
 */

import React, {Component as ReactComponent, createElement as $, createFactory} from 'react'
import {flowRight} from 'lodash'
import styles from './Frame.ncss'

const {div} = React.DOM

const Frame = flowRight()
(class C extends ReactComponent {
    render() {
        return (
            div({className: styles.frame}, this.props.children)
        )
    }
})

export default Frame
