// Handle keyboard controls
var keysDown = {};
var keysUp = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
	keysUp[e.keyCode] = false;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
	keysUp[e.keyCode] = true;
}, false);	