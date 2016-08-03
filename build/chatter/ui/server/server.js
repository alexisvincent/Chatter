import express from 'express'
import http from 'http'
import compression from 'compression'

import { constructIndex } from './utils'
import development from './development'

/**
 * Determine our environment
 * @type {boolean}
 */
const production = process.env.NODE_ENV == 'production',
      mobile = process.env.PLATFORM == 'mobile'

/**
 * Construct the server
 */
const app = express()
const server = http.Server(app)

/**
 * Gzip our output
 */
app.use(compression());

/**
 * If we're in development mode, load in dev specific things
 * like HMR and live scss compilation
 */
if (!mobile && !production) development(app, server)

/**
 * Serve all static files that are requested
 */
app.use('/', express.static(__dirname + '/..', {
    dotfiles: 'allow'
}))

/**
 * If no static file exists, construct and return the index
 */
app.get('*', (req, res) => res.send(constructIndex()))

/**
 * Listen on port 3000
 */
server.listen(3000, err => console.log(err ? err : `Listening at http://localhost:3000`))
