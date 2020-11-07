class Car {

    static decayMultiplier = 0.94
    static drivePower = 0.5
    static reversePower = 0.2
    static turnRate = 0.06
    static minSpeedToTurn = 0.5

    id
    x
    y
    ang
    speed
    image
    name
    keyHeld_Gas = false
    keyHeld_Reverse = false
    keyHeld_TurnLeft = false
    keyHeld_TurnRight = false
    controlKeyUp
    controlKeyRight
    controlKeyDown
    controlKeyLeft

    constructor(id, x, y, ang, speed, image, name) {
        this.id = id
        this.x = x
        this.y = y
        this.ang = ang
        this.speed = speed
        this.image = image
        this.name = name
    }

    setupInput = (upKey, rightKey, downKey, leftKey) => {
        this.controlKeyUp = upKey
        this.controlKeyRight = rightKey
        this.controlKeyDown = downKey
        this.controlKeyLeft = leftKey

        document.addEventListener('keydown', keyPressed)
        document.addEventListener('keyup', keyReleased)
    }

    reset = (levelGrid) => {
        this.speed = 0
        this.ang = 0
        for (let y = 0; y < levelGrid.length; y++) {
            for (let x = 0; x < levelGrid[y].length; x++) {
                if (levelGrid[y][x] === TileType.PLAYERSTART) {
                    // this.ang = -90 * Math.PI / 180
                    this.x = x * Tile.WIDTH + Tile.WIDTH / 2
                    this.y = y * Tile.HEIGHT + Tile.HEIGHT / 2
                    return
                }
            }
        }
    }

    move = () => {
        this.speed *= Car.decayMultiplier

        if (this.keyHeld_Gas) this.speed += Car.drivePower
        if (this.keyHeld_Reverse) this.speed -= Car.reversePower
        if (Math.abs(this.speed) > Car.minSpeedToTurn) {
            if (this.keyHeld_TurnLeft) {
                if (this.speed > 0) this.ang -= Car.turnRate
                else this.ang += Car.turnRate
            }
            if (this.keyHeld_TurnRight) {
                if (this.speed > 0) this.ang += Car.turnRate
                else this.ang -= Car.turnRate
            }
        }

        this.x += Math.cos(this.ang) * this.speed
        this.y += Math.sin(this.ang) * this.speed

        carTileHandling(this)
    }

    draw = () => {
        drawBitmapCenteredWithRotation(carPics[this.image], this.x, this.y, this.ang)
    }

}

function keySet(keyCode, setTo) {
    switch (keyCode) {
        case ownCar.controlKeyLeft:
            ownCar.keyHeld_TurnLeft = setTo; break
        case ownCar.controlKeyRight:
            ownCar.keyHeld_TurnRight = setTo; break
        case ownCar.controlKeyUp:
            ownCar.keyHeld_Gas = setTo; break
        case ownCar.controlKeyDown:
            ownCar.keyHeld_Reverse = setTo; break
    }
}

function keyPressed(evt) {
    keySet(evt.keyCode, true)
}

function keyReleased(evt) {
    keySet(evt.keyCode, false)
}