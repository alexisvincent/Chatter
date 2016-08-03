import path from 'path'
import socketio from 'socket.io'

import {
    watcher,
} from './utils'


/**
 * Handle /app.css getting called. This function compiles src/app/app.scss 
 * and returns it in a response.
 * @param app
 * @param server
 */
export default function(app, server) {
    const io = socketio(server)

    /**
     * Listen for file changes in the current directory and notifies the client
     * so that the new module can be swapped out.
     */
    watcher().on('all', (event, changePath) => {
        console.log('File ', changePath, ' emitted: ', event)
        let absolutePath = path.join(process.cwd(), changePath)

        clients.forEach((socket) => socket.emit(event, {path: changePath, absolutePath}))
    })

    let clients = [];

    /**
     * When a new client connects add it to a list and handle it disconnecting
     */
    io.on('connect', socket => {
        const index = clients.push(socket)

        socket.on('identification', (name) => {
            console.log('connected client: ', name)
        })

        socket.on('disconnect', () => clients.splice(index - 1, 1))
    })
}
