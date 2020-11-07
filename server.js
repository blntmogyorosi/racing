const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const rooms = require('./utils/rooms')

const { getRoom, createRoom, addPlayerToRoom, updatePlaceForPlayer, removePlayerFromRoom } = require('./utils/rooms')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = process.env.PORT || 8080
const clientDir = path.join(__dirname, './client')

app.use(express.static(clientDir))

io.on('connection', (socket) => {

    socket.on('join', (data, callback) => {
        const { roomId, name, image } = data
        const { room, error } = getRoom(roomId) ?
            addPlayerToRoom(roomId, socket.id, name, image) : 
            createRoom(roomId, socket.id, name, image)

        if (error) return callback(error)

        socket.join(room.id)
        io.to(room.id).emit('roomData', { room })

        callback()
    })

    socket.on('placeCar', (data, callback) => {
        const { roomId, car } = data

        updatePlaceForPlayer(roomId, car.id, car.x, car.y, car.ang)
    })

    socket.on('framePassed', (data, callback) => {
        const { roomId } = data
        const room = getRoom(roomId)
        if (!room) return
        if (!room.isPlaying) {
            room.isPlaying = true
            io.to(roomId).emit('gameStarted')
        }
        io.to(roomId).emit('requestPosition')
    })

    socket.on('position', (data, callback) => {
        const { roomId, x, y, ang } = data
        const room = getRoom(roomId)
        for (let i = 0; i < room.players.length; i++) {
            if (room.players[i].id === socket.id) {
                room.players[i].x = x
                room.players[i].y = y
                room.players[i].ang = ang
                break
            }
        }
        if (room.admin === socket.id) io.to(roomId).emit('updateLevel', { room: getRoom(roomId) })
    })

    socket.on('disconnect', () => {
        const { player, room } = removePlayerFromRoom(socket.id)
    })

    socket.on('gameFinished', (data, callback) => {
        const { roomId } = data
        io.to(roomId).emit('finished')
    })

})

server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})