function random(min, max){return Math.floor(Math.random() * (max - min + 1) + min)}

let data = []

for(let i = 0; i < 20; i+=1){
    data.push(random(-5, 5))
}

console.log(data)

const canvas = document.querySelector('.audio')
const ctx = canvas.getContext('2d')

function draw(data){
    let x = 0
    let y = 105

    ctx.beginPath()
    ctx.moveTo(x, y)
    data.forEach(elem => {
        x+=10
        y = 105 + elem
        ctx.lineTo(x, y)
        ctx.moveTo(x, y)
    })
    ctx.lineTo(x+10, 105)
    ctx.closePath()
    ctx.strokeStyle = 'grey'
    ctx.lineWidth = 3
    ctx.stroke()
}

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < data.length; i+=1) data[i] = data[i] + random(-1, 1)
}

document.querySelector('#btn-change').addEventListener('click', (e)=>{
    update()
    draw(data)
})

/*
function gameLoop(){

    update()
    draw(data)

    requestAnimationFrame(gameLoop)
}

document.querySelector('#btn-animation').addEventListener('click', gameLoop)*/

document.querySelector('#btn-animation').addEventListener('click', ()=>{
    setInterval(()=>{
        update()
        draw(data)
    }, 25)
})


draw(data)