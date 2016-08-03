import {Route, IndexRoute, Redirect} from 'react-router'
import {createFactory as fact} from 'react'
const route = fact(Route),
    index = fact(IndexRoute),
    redirect = fact(Redirect)

/**
 * Container imports
 */
import Frame from './components/Frame/Frame.js'
import App from './components/App/App.js'
/**
 * Routes for React Router
 *
 * Top level routes are containers.
 * Children are views or components within views.
 *
 */
const routes = [
    /**
     * If we're in development this adds a /playground route
     * mapping to the Playground.js component for testing things
     */
    redirect({from: '/', to: "/chat"}),
    route({path: '/', component: Frame},
        route({path: '/chat', component: App}),
    ),
]

export {routes as default, routes}
