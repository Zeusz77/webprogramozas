const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function isCollided(a, b){
    return !(
        b.y + b.height < a.y ||
        a.x + a.width < b.x ||
        a.y + a.height < b.y ||
        b.x + b.width < a.x
    )
}

const bird = {
    x: 50,
    y: canvas.height / 2,
    height: 30,
    width: 50,
    vy: 0,
    ay: 250
}

const images = {
    sky: new Image(),
    birb: new Image(),
    column: new Image()
}

images.sky.src = 'bg.png'
images.birb.src = 'bird.png'
images.column.src = 'column.png'

const columns = []
const GAP = 150
const COLUMN_DISTANCE = 300
const COLUMN_VELOCITY = -200

let gameState = 0

function newColumn() {
    const h = random(10, canvas.height / 2)
    columns.push(
        {
            x: canvas.width,
            y: 0,
            width: 30,
            height: h,
        },
        {
            x: canvas.width,
            y: h + GAP,
            width: 30,
            height: canvas.height - (GAP - h),
        },
    )
}


function draw(){
    /*ctx.fillStyle = 'red'
    ctx.fillRect(10, 10, 20, 50)*/
    //Background
    //ctx.fillStyle = 'lightblue'
    //ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(images.sky, 0, 0, 600, 400)
    //Birb
    //ctx.fillStyle = 'yellow'
    //ctx.fillRect(bird.x, bird.y, bird.width, bird.height)
    ctx.drawImage(images.birb, bird.x, bird.y, bird.width, bird.height)
    //Column
    //ctx.fillStyle = 'grey'
    //columns.forEach(e => ctx.fillRect(e.x, e.y, e.width, e.height))
    columns.forEach(e => ctx.drawImage(images.column, e.x, e.y, e.width, e.height))
    if(gameState){
        ctx.fillStyle = 'red'
        ctx.font = '100px serif'
        ctx.fillText('GAME OVER', 10, 100)
    }
}

// gameloop
let prevTime = performance.now()

function gameLoop(now = performance.now()) {
    const dt = (now - prevTime) / 1000
    prevTime = now

    update(dt)
    draw()

    if(!gameState){
        requestAnimationFrame(gameLoop)
    }
}
function update(dt) {
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt

    const lastColumn = columns[columns.length - 1]
    if(columns.length == 0 || lastColumn.x < canvas.width - COLUMN_DISTANCE ) newColumn()

    const firstColumn = columns[0]
    if(firstColumn.x <  -firstColumn.width){
        columns.shift()
        columns.shift()
    }
    
    columns.forEach(e => {if(isCollided(bird, e)) gameState = 1})

    columns.forEach(e => e.x += dt * COLUMN_VELOCITY)
    
}

document.addEventListener('keydown', (e)=>{
    bird.vy = -200
})

// Start
gameLoop()

