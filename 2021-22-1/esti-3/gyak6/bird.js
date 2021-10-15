const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')

//Help
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

//STATE
let prevTime = performance.now()
const bird = {
    x: 50,
    y: canvas.height /2,
    width: 30,
    height: 50,
    vy: 0,
    ay: 250
}
const columns = []
const GAP = 150
const COLUMN_DISTANCE = 300
const COLUMN_VELOCITY = -200

let gameState = 0 

const images = {
    bird: new Image(),
    sky: new Image(),
    column: new Image()
}


function newColumn(){
    const h = random(10, canvas.height / 2)
    
    columns.push({
        x: canvas.width,
        y: 0,
        width: 30,
        height: h
    },
    {
        x: canvas.width,
        y: h + GAP,
        width: 30,
        height: canvas.height - GAP - h
    })
}

//Game Loop
function gameLoop(now = performance.now()){
    const dt = (now - prevTime) / 1000
    prevTime = now

    update(dt)
    draw()

    if(!gameState){
        requestAnimationFrame(gameLoop)
    }
}

function update(dt){
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt
    //New Colums
    const lastColumn = columns[columns.length - 1]
    if(columns.length === 0 || lastColumn.x < canvas.width - COLUMN_DISTANCE){
        newColumn()
    }
    //Remove Colums
    const firstColumn = columns[0]
    if(firstColumn.x <  -firstColumn.width){
        columns.shift()
        columns.shift()
    }
    //Move Columns
    columns.forEach(column =>{
        column.x += COLUMN_VELOCITY * dt
        if(isCollided(bird, column)){
            gameState = 1
        }
    })
}


function draw(){
    //sky
    ctx.fillStyle = 'lightblue'
    //ctx.fillRect(0, 0, 600, 400)
    ctx.drawImage(images.sky, 0, 0, 600, 400)
    //bird
    ctx.fillStyle = 'yellow'
    //ctx.fillRect(bird.x, bird.y, bird.height, bird.width)
    ctx.drawImage(images.bird, bird.x, bird.y, bird.width, bird.height)
    //Colums
    ctx.fillStyle = 'darkgrey'
    columns.forEach(column => {
        //ctx.fillRect(column.x, column.y, column.width, column.height)
        ctx.drawImage(images.column, column.x, column.y, column.width, column.height)
    })
    if(gameState){
        ctx.fillStyle = 'red'
        ctx.font = '100px serif'
        ctx.fillText('GAME OVER', 10, 100)
    }
}

//Event
document.addEventListener('keydown', (e)=>{
    bird.vy = -300
})

//Start
gameLoop()
images.bird.src = 'bird.png'
images.sky.src = 'bg.png'
images.column.src = 'column.png'

/*
Ciling check +1
Floor Check +1
+++ Score +2 
+++ Audio +2
*/