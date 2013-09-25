// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 800;
canvas.style.backgroundColor = "black";
//canvas.style.verticalAlign = "middle";
document.body.appendChild(canvas);

const heroSize = blockSize*2;//64

// Game objects
var hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0,
	abs_x: 0,
	abs_y: 0,
	height: 32,
	width: 32, 
	baseHeight: 32, //if you change it collision will break
	baseWidth: 32,
	
	curChunk_i1: 0,
	curChunk_i2: 0,
	curChunk_j1: 0,
	curChunk_j2: 0,	
	
	curBlock_i1: 0,
	curBlock_j2: 0,
	curBlock_i1: 0,
	curBlock_j2: 0
};

// world
var world = [];


// The main game loop
var main = function () 
{
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
	
	//use to debug world
	/*if (typeof console._commandLineAPI !== 'undefined') {
		console.API = console._commandLineAPI;
	} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
		console.API = console._inspectorCommandLineAPI;
	} else if (typeof console.clear !== 'undefined') {
		console.API = console;
	}
	console.API.clear();
	console.log(world);*/
};

// Let's play this game!
reset();
var then = Date.now();

setInterval(main, 17); 