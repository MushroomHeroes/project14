
var Game =   Game || { version: 0.1 };

Game.Width = 800;
Game.Height = 600;
Game.BackgroundColor = '#000000'; //black

Game.initialize = function (canvasId) {
	var canvas = window.document.getElementById(canvasId);	
	
	if (!canvas) {
		throw 'Canvas was not found!';
	}

	canvas.width = Game.Width;
	canvas.height = Game.Height;
	canvas.style.backgroundColor = Game.BackgroundColor;

	Game.context = canvas.getContext('2d');

	if (!window.requestAnimationFrame) {
		throw 'This browser does not support requestAnimationFrame!';
	}

	var startTime = 0;

	(function GameLoop (currentTime) {
		if (!currentTime) {
			currentTime = startTime;
		}

		var now = new Date(currentTime).getMilliseconds();

		Game.update(now - startTime);
		Game.render();

		startTime = now;

		window.requestAnimationFrame(GameLoop, canvas);
	})();
};

Game.update = function (gameTime) {
	console.log(gameTime);
};

Game.render = function () {
	
};


// // Game objects
// var hero = {
// 	speed: 256, // movement in pixels per second
// 	x: 0,
// 	y: 0,
// 	height: 64,
// 	width: 64,
// };

// // world
// var world = [];


// // The main game loop
// var main = function () 
// {
// 	var now = Date.now();
// 	var delta = now - then;

// 	update(delta / 1000);
// 	render();

// 	then = now;
// };

// // Let's play this game!
// reset();
// var then = Date.now();

// addChunk(2, -5, Math.floor(Math.random()*texCount));
// addChunk(3, -4, Math.floor(Math.random()*texCount));
// addChunk(2, -3, Math.floor(Math.random()*texCount));
// addChunk(-1, 0, Math.floor(Math.random()*texCount));
// addChunk(-1, -1, Math.floor(Math.random()*texCount));
// addChunk(1, -1, Math.floor(Math.random()*texCount));
// addChunk(-2, -2, Math.floor(Math.random()*texCount));
// addChunk(-3, -1, Math.floor(Math.random()*texCount));
// //console.log(world);
// setInterval(main, 17); 