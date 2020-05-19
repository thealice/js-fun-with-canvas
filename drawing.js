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
    console.log(e);
}

canvas.addEventListener('mousemove', draw)