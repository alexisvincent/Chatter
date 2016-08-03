import chokidar from 'chokidar'
import jspm from 'jspm'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import path from 'path'
import fs from 'fs'
import cheerio from 'cheerio'
import _ from 'lodash'

/**
 * Set defaults for env or use provided values
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.API_HOST = process.env.API_HOST || "localhost"
process.env.API_PORT = process.env.API_PORT || '3000'
process.env.MOCK = process.env.MOCK || false
process.env.PLATFORM = process.env.PLATFORM || 'web'
process.env.DEBUG = process.env.NODE_ENV === 'production' ? false : process.env.DEBUG || false
process.env.MODELIZR_CHEAP_MOCK = process.env.NODE_ENV === 'production' ? true : process.env.MODELIZR_CHEAP_MOCK || false

/**
 * Construct Environment to inject
 */
export const env = JSON.stringify({
    NODE_ENV: process.env.NODE_ENV,
    API_HOST: process.env.API_HOST,
    API_PORT: process.env.API_PORT,
    MOCK: process.env.MOCK,
    PLATFORM: process.env.PLATFORM,
    DEBUG: process.env.DEBUG,
    MODELIZR_CHEAP_MOCK: process.env.MODELIZR_CHEAP_MOCK
})

console.log("You are running in ", process.env.NODE_ENV, "on", process.env.PLATFORM)

/**
 * Determine Environment
 * @type {boolean}
 */
const production = process.env.NODE_ENV == 'production'

/**
 * Listen for changes in the current directory and return an event emmiter
 */
export const watcher = () => chokidar.watch('.', {
    ignored: ["**/jspm_packages", "**/node_modules", "**/icons"],
    ignoreInitial: true
})

export {jspm}

/**
 * Construct SystemJS loading
 */
export const sysjs = () => `
<script type="text/javascript" charset="utf-8">
    var oldLoad = window.onload
    window.onload = function() {

        if (oldLoad) oldLoad();

        ${production ? `System.import('app/app.js')` : ''}

        ${!production ? `
        var server = 'http://' + window.location.hostname + ':' + (window.location.port == '' ? '80' : window.location.port)
	    System.trace = true
        System.import('capaj/systemjs-hot-reloader').then(function (HotReloader) { new HotReloader.default(server)}).then(function () {
        System.import('app/app.js')
    });` : ''}
    }</script>`

/**
 * Build out the index file
 * @returns String
 */
export const constructIndex = () => {
    const index = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'),
        injector = cheerio.load(index)

    const variables = `<script>window.env = ${env}</script>`
    const js = []
    const css = []

    /**
     * Load SystemJS
     */
    js.push(`<script src="jspm_packages/system.js"></script>`)
    js.push(`<script defer src="jspm.browser.js"></script>`)
    js.push(`<script defer src="jspm.config.js"></script>`)

    /**
     * Load external styles
     */
    css.push(`<link rel="stylesheet" href="resources/icomoon/style.css">`)
    css.push(`<link rel="stylesheet" href="resources/css/lato.css">`)

    /**
     * Pull our bundled app in if in production and not on mobile
     */
    if (production) {
        js.push(`<script defer src="/build/bundle.js"></script>`)
        css.push(`<link rel="stylesheet" href="/build/app.css">`)
    }

    /**
     * If in web development mode, load the dependency bundle
     */
    if (!production) {
        js.push(`<script defer src="/build/dev-bundle.js"></script>`)
    }

    /**
     * Inject our environment into window
     */
    injector('head').append(`
    <script type="text/javascript" charset="utf-8">
        window.process = {
            env: ${env}
        }
    </script>
    `)


    /**
     * Inject the SystemJS App loader script
     */
    js.push(sysjs())

    /**
     * Inject scripts and css
     */
    _.forEach(css, resource => injector('head').append(`${resource}\n`))
    _.forEach(js, script => injector('body').append(`${script}\n`))
    injector('body').append(`${variables}\n`)

    return injector.html()
}
