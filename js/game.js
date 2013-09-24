// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
//canvas.style.verticalAlign = "middle";
document.body.appendChild(canvas);

// Game objects
var hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0,
	height: 64,
	width: 64,
};

// world
const blockSize = 16;
const chunkSize = 8;
var world = [];


// The main game loop
var main = function () 
{
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
};

// Let's play this game!
reset();
var then = Date.now();

addChunk(2, -5, Math.floor(Math.random()*texCount));
addChunk(3, -4, Math.floor(Math.random()*texCount));
addChunk(2, -3, Math.floor(Math.random()*texCount));
addChunk(-1, 0, Math.floor(Math.random()*texCount));
addChunk(-1, -1, Math.floor(Math.random()*texCount));
addChunk(1, -1, Math.floor(Math.random()*texCount));
addChunk(-2, -2, Math.floor(Math.random()*texCount));
addChunk(-3, -1, Math.floor(Math.random()*texCount));
//console.log(world);
setInterval(main, 30); 