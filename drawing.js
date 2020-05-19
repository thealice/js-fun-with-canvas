const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
// where to start and stop the line
let lastX = 0;
let lastY = 0; 


function draw(e) {
    if(!isDrawing) return; // strop the function from running when they are not moused down
    console.log(e);
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // update last x and y variables to be whereever they were while drawing
    [lastX, lastY] = [e.offsetX, e.offsetY];

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);