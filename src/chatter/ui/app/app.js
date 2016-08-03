import 'isomorphic-fetch'
import React, { createElement as $ } from 'react'
import { render } from 'react-dom'

import Index from './components/Index.js'
import './app.ncss'

// Production | Development
const production = window.env.NODE_ENV == 'production'

// Render root component and optionally fire a callback
render($(Index), document.getElementById('root'))
