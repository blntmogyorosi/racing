const rooms = []

const getRoom = (roomId) => {
    return rooms.find(r => r.id === roomId)
}

const createRoom = (roomId, id, name, image) => {
    roomId = roomId.trim().toLowerCase()
    name = name.trim().toLowerCase()
    image = image.trim().toLowerCase()

    if (!roomId) return { error: { roomId: 'Room is required!' } }
    else if (rooms.find(r => r.id === roomId)) return { error: { roomId: 'Room is in use!' } }
    if (!name) return { error: { name: 'Name is required!' } }
    if (!image) return { error: { image: 'Image is required!' } }

    const room = {
        id: roomId,
        admin: id,
        isPlaying: false,
        level: 1,
        toStart: 5,
        players: [
            { id, name, image, points: 0, x: null, y: null },
        ]
    }
    rooms.push(room)
    return { room }
}

const addPlayerToRoom = (roomId, id, name, image) => {
    roomId = roomId.trim().toLowerCase()
    name = name.trim().toLowerCase()
    image = image.trim().toLowerCase()

    let room

    if (!roomId) return { error: { roomId: 'Room is required!' } }
    else {
        room = getRoom(roomId)
        if (!room) return { error: { roomId: `Room ${room} is not found!` } }
    }
    if (!name) return { error: { name: 'Name is required!' } }
    else if (room.players.find(p => p.name === name)) return { error: { name: `Name ${name} is in use!` } }
    if (!image) return { error: { image: 'Image is required!' } }
    else if (room.players.find(p => p.image === image)) return { error: { image: `Image ${image} is in use!` } }

    const player = { id, name, image, points: 0, x: null, y: null }
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].id === roomId) {
            rooms[i].players.push(player)
            return { room }
        }
    }
}

const updatePlaceForPlayer = (roomId, id, x, y, ang) => {
    const room = getRoom(roomId)
    for (let i = 0; i < room.players.length; i++) {
        if (room.players[i].id === id) {
            room.players[i].x = x
            room.players[i].y = y
            room.players[i].ang = ang
            return room
        }
    }
}

const removePlayerFromRoom = (id) => {
    let index
    let player
    let room
    for (let i = 0; i < rooms.length; i++) {
        index = rooms[i].players.findIndex(p => p.id === id)
        if (index !== -1) {
            player = rooms[i].players.splice(index, 1)[0]
            if (rooms[i].players.length === 0 && rooms[i].admin === player.id) {
                room = rooms.splice(i, 1)[0]
            }
            return { player, room }
        } 
    }
    return {}
}

module.exports = { getRoom, createRoom, addPlayerToRoom, updatePlaceForPlayer, removePlayerFromRoom }