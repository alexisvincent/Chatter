import 'isomorphic-fetch'
import React, {createElement as $} from 'react'
import {render} from 'react-dom'
import {Router, browserHistory, hashHistory} from 'react-router'
import {reloadStore} from './acrossReload.js';
import routes from './routes.js'

// Production | Development
const production = window.env.NODE_ENV == 'production'

let router
    = reloadStore("router").router
        = reloadStore("router").router
        || $(Router, {history: production ? browserHistory : hashHistory}, ...routes)

// Render root component and optionally fire a callback
render($(() => (
    router
)), document.getElementById('root'))
