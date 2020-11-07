const socket = io()

let canvas, ctx

let currentLevel

let playerCars = []
let ownCar = null

let gameInterval

window.onload = function () {
    canvas = document.querySelector('#gameCanvas')
    ctx = canvas.getContext('2d')

    loadLevel(levelOne.reduce((lvl, lvlRow) => ([...lvl, lvlRow.slice()]), []))

    loadImages()
}

function imageLoadingDone() {
    drawLevel(currentLevel)
    drawCars()
}

function loadLevel(level) {
    canvas.width = level[0].length * Tile.HEIGHT
    canvas.height = level.length * Tile.WIDTH

    currentLevel = level
}

function drawLevel(level) {
    for (let y = 0; y < level.length; y++) {
        for (let x = 0; x < level[y].length; x++) {
            ctx.drawImage(tilePics[level[y][x]], x * Tile.WIDTH, y * Tile.HEIGHT)
        }
    }
}

function drawCars() {
    for (let car of playerCars) {
        if (car.name === urlParams.get('name')) continue
        car.draw()
    }
    if (ownCar) ownCar.draw()
}

function drawAll() {
    drawLevel(currentLevel)
    drawCars()
}

function startGame() {
    document.querySelector('#startGameButton').setAttribute('disabled', 'disabled')
    const FPS = 30
    gameInterval = setInterval(() => {
        socket.emit('framePassed', { roomId: urlParams.get('roomId') }, () => { })
    }, 1000 / FPS)
}

const urlParams = new URLSearchParams(window.location.search)

const $gameInfo = document.querySelector('#gameInfo')
const gameInfoTemplate = document.querySelector('#gameInfoTemplate').innerHTML

socket.emit('join', { roomId: urlParams.get('roomId'), name: urlParams.get('name'), image: urlParams.get('image') }, (error) => {
    if (error) {
        alert(Object.keys(error)[0], error[Object.keys(error)])
        location.href = "/"
    }
})

socket.on('roomData', (data) => {
    const { room } = data
    let matchFound
    for (let i = 0; i < room.players.length; i++) {
        matchFound = false
        if (room.players[i].id === socket.id) {
            if (!ownCar) {
                ownCar = new Car(room.players[i].id, room.players[i].x, room.players[i].y, room.players[i].ang, room.players[i].speed, room.players[i].image, room.players[i].name)
                ownCar.reset(currentLevel)
                socket.emit('placeCar', { roomId: urlParams.get('roomId'), car: ownCar }, () => { })
            }
            continue
        }
        for (let j = 0; j < playerCars.length; j++) {
            if (room.players[i].id === playerCars[j].id) {
                playerCars[j].x = room.players[i].x
                playerCars[j].y = room.players[i].y
                playerCars[j].ang = room.players[i].ang
                matchFound = true
                break
            }
        }
        if (!matchFound) {
            const newCar = new Car(room.players[i].id, room.players[i].x, room.players[i].y, room.players[i].ang, room.players[i].speed, room.players[i].image, room.players[i].name)
            newCar.reset(currentLevel)
            socket.emit('placeCar', { roomId: urlParams.get('roomId'), car: newCar }, () => { })
            playerCars.push(newCar)
        }
    }
    const gameInfoHtml = Mustache.render(gameInfoTemplate, {
        roomId: room.id,
        levelNumber: room.level,
        players: room.players,
        isAdmin: socket.id === room.admin,
    })
    $gameInfo.innerHTML = gameInfoHtml
    drawCars()
})

socket.on('requestPosition', (data) => {
    ownCar.move()
    socket.emit('position', { roomId: urlParams.get('roomId'), x: ownCar.x, y: ownCar.y, ang: ownCar.ang }, () => { })
})

socket.on('updateLevel', (data) => {
    const { room } = data
    for (let i = 0; i < room.players.length; i++) {
        if (room.players[i].id === socket.id) continue
        for (let j = 0; j < playerCars.length; j++) {
            if (room.players[i].id === playerCars[j].id) {
                playerCars[j].x = room.players[i].x
                playerCars[j].y = room.players[i].y
                playerCars[j].ang = room.players[i].ang
                break
            }
        }
    }
    drawAll()
})

socket.on('gameStarted', () => {
    ownCar.setupInput(38, 39, 40, 37)
})

socket.on('finished', () => {
    clearInterval(gameInterval)
})