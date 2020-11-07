const TileType = {
    WALL: 'W',
    ROAD: 'R',
    PLAYERSTART: 'PS',
    FLAG: 'WF',
    GOAL: 'G',
}

const TilePics = {
    W: 'tile_wall.png',
    R: 'tile_road.png',
    PS: 'tile_road.png',
    WF: 'tile_flag.png',
    G: 'tile_goal.png',
}

const Tile = {
    WIDTH: 40,
    HEIGHT: 40,
}

function returnTileTypeAtColRow(col, row) {
    if (col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS) {
        var trackIndexUnderCoord = rowColToArrayIndex(col, row);
        return trackGrid[trackIndexUnderCoord];
    } else {
        return TRACK_WALL;
    }
}

function carTileHandling(car) {
    var carTileCol = Math.floor(car.x / Tile.WIDTH);
    var carTileRow = Math.floor(car.y / Tile.HEIGHT);

    if (carTileCol >= 0 && carTileCol < currentLevel[0].length &&
        carTileRow >= 0 && carTileRow < currentLevel.length) {

        let tileHere = currentLevel[carTileRow][carTileCol]

        if (tileHere === TileType.GOAL) {
            socket.emit('gameFinished', { roomId: urlParams.get('roomId') })
            alert('You won!')
        } else if (!(tileHere === TileType.ROAD || tileHere === TileType.PLAYERSTART)) {
            car.x -= Math.cos(car.ang) * car.speed
            car.y -= Math.sin(car.ang) * car.speed

            car.speed *= -0.5
        }
    }
}
