const cnv = document.querySelector('.audio')
const ctx = cnv.getContext('2d')

const btnc = document.querySelector('#btn-change')
const btna = document.querySelector('#btn-animation')

function random(min, max){return Math.floor(Math.random() * (max - min + 1) + min)}

console.log(random(-10, 10))


let tomb = [] 
for(let i = 0; i < 20; i+=1){
    tomb.push(random(-5, 5))
}

console.log(tomb)

function draw(){
    let x = 0
    let y = 105

    ctx.beginPath()
    ctx.moveTo(x, y)
    for(let elem of tomb){
        x += 10
        y = 105 + elem
        ctx.lineTo(x, y)
        ctx.moveTo(x, y)
    }
    ctx.lineTo(x+10, 105)
    ctx.closePath()
    ctx.strokeStyle = 'grey'
    ctx.lineWidth = 3
    ctx.stroke()
}

function chng(){
    for(let i = 0; i < tomb.length; i+=1){
        tomb[i] += random(-1, 1)
    }
}

btnc.addEventListener('click', (evnt)=>{
    ctx.clearRect(0, 0, 210, 210)
    chng()
    draw()
})

function loop(){
    ctx.clearRect(0, 0, 210, 210)
    chng()
    draw()

    requestAnimationFrame(loop)
}

btna.addEventListener('click', loop)

/*btna.addEventListener('click', (evnt)=>{
    setInterval(()=>{
        ctx.clearRect(0, 0, 210, 210)
        chng()
        draw()
    }, 42.23)
})*/

draw()

