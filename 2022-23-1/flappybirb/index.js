const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

let POINTS = 0

const images = {
    bird: new Image(),
    background: new Image(),
    column: new Image(),
}

const bird = {
    x: 50,
    y: canvas.height / 2,
    width: 30,
    height: 50,
    vy: 0,
    ay: 250
}

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function newColumn() {
    const h = random(10, canvas.height / 2);
    columns.push(
        {
            x: canvas.width,
            y: 0,
            width: 30,
            height: h,
            counted: false
        },
        {
            x: canvas.width,
            y: h + GAP,
            width: 30,
            height: canvas.height - GAP - h,
        },
    );
}

function isCollide(a, b) {
    return !(
        b.y + b.height  < a.y ||
        a.x + a.width < b.x ||
        a.y + a.height  < b.y ||
        b.x + b.width < a.x
    );
}

const columns = []
const GAP = 150;    // px, the gap between the upper and lower column
const COLUMN_DISTANCE = 300;  // px, distance between consecutive columns
const COLUMN_VELOCITY = -200;  // px, horizontal speed of columns

// State = data
let prevTime = performance.now();
let isEnd = false

function gameLoop(now = performance.now()) {
    const dt = (now - prevTime) / 1000;
    prevTime = now;

    update(dt);
    draw();

    if(!isEnd) requestAnimationFrame(gameLoop);
}

function update(dt) {
    // Updating application state
    // Bird moves
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt

    // Add a pair of columns
    // If the last column moved from the right edge of canvas to COLUMN_DISTANCE,
    // then add a new pair of column
    if(columns[columns.length - 1].x < canvas.width - COLUMN_DISTANCE) newColumn()

    columns.forEach(e => { e.x += 
        COLUMN_VELOCITY * dt
        isEnd = isEnd || isCollide(bird, e)
    })

    if(columns[0].x < bird.x && !columns[0].counted){
        POINTS++
        columns[0].counted = true
    }

    if(columns[0].x + 30 < 0){
        columns.shift()
        columns.shift()
    }

    if(bird.y + bird.height < 0 || bird.y > canvas.height){
        isEnd = true
    }
}

function draw() {
    // Drawing
    /*ctx.fillStyle = '#71b2f0'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#fcfc03'
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height)

    ctx.fillStyle = 'white'
    columns.forEach(e => ctx.fillRect(e.x, e.y, e.width, e.height))*/

    ctx.drawImage(images.background, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(images.bird, bird.x, bird.y, bird.width, bird.height)
    columns.forEach(e => ctx.drawImage(images.column, e.x, e.y, e.width, e.height))

    ctx.fillStyle = 'black';
    ctx.font = '18px sans';
    ctx.fillText(POINTS, 25, 25);

    if (isEnd) {
        ctx.fillStyle = 'red';
        ctx.font = '100px serif';
        ctx.fillText('Game over', 75, 75);
    }
}

//Event
document.addEventListener('keydown', (e)=>{
    bird.vy = -200
})

// Start
images.bird.src = 'bird.png';
images.background.src = 'bg.png';
images.column.src = 'column.png';
newColumn()
gameLoop()