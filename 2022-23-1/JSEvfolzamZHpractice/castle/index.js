const textarea = document.querySelector("textarea");
const slider = document.querySelector("input[type=range]");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height / 2);

function draw(){
    const magnification = slider.value;

    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    let data = document.querySelector("textarea").value.split("\n");
    for (const line in data) {
        data[line] = data[line].split(" ");
        for (const key in data[line]) {
            data[line][key] = parseInt(data[line][key]);
        }
    };

    console.log(data);

    data.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line[0] * magnification, line[1] * magnification);
        ctx.lineTo(line[2] * magnification, line[3] * magnification);
        ctx.stroke();
    });
}

draw();

textarea.addEventListener("input", draw);
slider.addEventListener("input", draw);