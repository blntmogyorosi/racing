const carPic = document.createElement("img")
const otherCarPic = document.createElement("img")

const carPics = []
const tilePics = []


let picsToLoad = 0

function countLoadedImages() {
    picsToLoad--
    if (picsToLoad == 0) {
        imageLoadingDone()
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImages
    imgVar.src = "img/" + fileName
}

function loadCarImage(car, fileName) {
    carPics[car] = document.createElement("img")
    beginLoadingImage(carPics[car], fileName)
}

function loadTileImage(tileType, fileName) {
    tilePics[tileType] = document.createElement("img")
    beginLoadingImage(tilePics[tileType], fileName)
}

function loadImages() {
    let imageList = [
        { car: "red_car.png", fileName: "red_car.png" },
        { car: "yellow_car.png", fileName: "yellow_car.png" },
        { car: "blue_car.png", fileName: "blue_car.png" },
        { car: "green_car.png", fileName: "green_car.png" },

        { tileType: TileType.ROAD, fileName: "tile_road.png" },
        { tileType: TileType.PLAYERSTART, fileName: "tile_road.png" },
        { tileType: TileType.WALL, fileName: "tile_wall.png" },
        { tileType: TileType.GOAL, fileName: "tile_goal.png" },
        { tileType: 'T', fileName: "tile_tree.png" },
        { tileType: TileType.FLAG, fileName: "tile_flag.png" },
    ]

    picsToLoad = imageList.length

    for (let image of imageList) {
        if (image.car !== undefined) {
            loadCarImage(image.car, image.fileName)
        } else {
            loadTileImage(image.tileType, image.fileName)
        }
    }
}