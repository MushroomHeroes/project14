// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

// Game objects
var hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0,
	height: 64,
	width: 64,
};

//world
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

var addChunk = function (i, j)
{
	if (i < min_chunk_i)
		min_chunk_i = i;
		
	if (j < min_chunk_j)
		min_chunk_j = j;
		
	if (i > max_chunk_i)
		max_chunk_i = i;
		
	if (j > max_chunk_j)
		max_chunk_j = j;
		
	if (typeof world[i] == 'undefined')
		world[i] = [];
	world[i][j] = new chunk();
}

// Let's play this game!
reset();
var then = Date.now();

addChunk(2, -5);
addChunk(3, -4);
addChunk(2, -3);

addChunk(-1, 0);
addChunk(-1, -1);

addChunk(1, -1);
//console.log(world);
setInterval(main, 30); 