const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
// where to start and stop the line
let lastX = 0;
let lastY = 0; 
// color starts at red
let hue = 0;
// lineWidth starts by increasing in size
let direction = true;


function draw(e) {
    if(!isDrawing) return; // strop the function from running when they are not moused down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // update last x and y variables to be whereever they are while drawing
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // increment hue
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    // cycle lineWidth between 100 and 1 
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // start the line hwere you first put your mouse down (not where your last line leftoff)
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);