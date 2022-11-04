const red = document.querySelectorAll('#red');
const green = document.querySelectorAll('#green');
const blue = document.querySelectorAll('#blue');
const animate = document.querySelector('#animate');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let on = false;

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red'
    ctx.fillRect(0, canvas.height, 100, red[0].value * -1);

    ctx.fillStyle = 'green'
    ctx.fillRect(100, canvas.height, 100, green[0].value * -1);

    ctx.fillStyle = 'blue'
    ctx.fillRect(200, canvas.height, 100, blue[0].value * -1);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.beginPath();
    let hg = canvas.height - Math.max(red[0].value, green[0].value, blue[0].value);
    ctx.moveTo(0, hg);
    ctx.lineTo(300, hg);
    ctx.stroke();
}

function animatedDraw(){
    red[0].value = parseInt(red[0].value) + random(-2, 2);
    red[1].innerHTML = red[0].value;
    green[0].value = parseInt(green[0].value) + random(-2, 2);
    green[1].innerHTML = green[0].value;
    blue[0].value = parseInt(blue[0].value) + random(-2, 2);
    blue[1].innerHTML = blue[0].value;

    draw();

    sleep(100).then(() => {
        if(on) requestAnimationFrame(animatedDraw);
    });
}

red[0].addEventListener('input', () => {
    red[1].innerHTML = red[0].value;
    draw();
});

green[0].addEventListener('input', () => {
    green[1].innerHTML = green[0].value;
    draw();   
});

blue[0].addEventListener('input', () => {
    blue[1].innerHTML = blue[0].value;
    draw();
});

animate.addEventListener('click', () => {
    on = !on;
    if(on) requestAnimationFrame(animatedDraw);
});    


draw();