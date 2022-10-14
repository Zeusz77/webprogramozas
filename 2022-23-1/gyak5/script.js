const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

//ctx.translate(400, 400)
/*
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, 10, 10)
*/
/*
ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(25, 75);
ctx.lineTo(25, 50);
ctx.lineTo(50, 50);
ctx.lineTo(50, 75);
ctx.lineTo(50, 25);

ctx.moveTo(75, 25);
ctx.lineTo(75, 75);
ctx.stroke();
ctx.closePath(); */

/*function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

ctx.fillStyle = 'black'

function draw(evnt){
    let p = getMousePos(canvas, evnt)

    ctx.fillRect(p.x, p.y, 5, 5)
}

canvas.addEventListener('mousedown', ()=>{
    canvas.addEventListener('mousemove', draw)
})

canvas.addEventListener('mouseup', ()=>{
    canvas.removeEventListener('mousemove', draw)
})

const color = document.querySelector('#color')

color.addEventListener('input', (evnt) => {
    ctx.fillStyle = color.value
})

const myImage = new Image();
myImage.src = 'peter-griffin.png';

ctx.drawImage(myImage, 0, 0)*/

for(let x = 0; x < 800; x++){
    let y = Math.sin(x/10) * 10
    ctx.fillStyle = 'black'
    ctx.fillRect(x, y+400, 2, 2)
}