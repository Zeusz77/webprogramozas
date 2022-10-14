const ctx = document.querySelector('canvas').getContext('2d')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(getRndInteger(-10, 10))

let tomb = []

for(let i = 0; i < 20; i++) tomb.push(getRndInteger(-6, 6))

console.log(tomb)

ctx.strokeStyle = 'grey'
ctx.lineWidth = 3;

draw()

function changeByOne(){
    for(let i in tomb){
        tomb[i] += getRndInteger(-2, 2)
    }
}

function draw(){
    ctx.beginPath()
    let x = 0
    ctx.moveTo(x, 105)
    tomb.forEach(elem => {
        x+=10
        ctx.lineTo(x, 105+elem)
    })
    x+=10
    ctx.lineTo(x, 105 )
    ctx.stroke()
    ctx.closePath()
}

const change = document.querySelector('#btn-change')

change.addEventListener('click', (evnt) => {
    ctx.clearRect(0, 0, 210, 210)
    changeByOne()
    console.log(tomb)
    draw()
})

const animate = document.querySelector('#btn-animation')

animate.addEventListener('click', () => {
    setInterval(() => {
        ctx.clearRect(0, 0, 210, 210)
        changeByOne()
        console.log(tomb)
        draw()
    }, 24,56)
})