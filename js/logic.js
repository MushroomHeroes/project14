var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
};

// Update game objects
var update = function (modifier) 
{
	if (38 in keysDown) 
	{ // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) 
	{ // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) 
	{ // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) 
	{ // Player holding right
		hero.x += hero.speed * modifier;
	}
	
	//create chunks on the fly
	var x = hero.x - canvas.width/2;
	var y = hero.y - canvas.height/2;
	var chunk_i = Math.floor(x / blockSize / chunkSize);
	var chunk_j = Math.floor(y / blockSize / chunkSize);
	
	if (typeof world[chunk_i] == 'undefined' || typeof world[chunk_i][chunk_j] == 'undefined')
		addChunk(chunk_i, chunk_j, Math.floor(Math.random()*texCount));
	if (typeof world[chunk_i][chunk_j + 1] == 'undefined')
		addChunk(chunk_i, chunk_j + 1, Math.floor(Math.random()*texCount));
	if (typeof world[chunk_i][chunk_j - 1] == 'undefined')
		addChunk(chunk_i, chunk_j - 1, Math.floor(Math.random()*texCount));
		
	if (typeof world[chunk_i + 1] == 'undefined' || typeof world[chunk_i + 1][chunk_j] == 'undefined')
		addChunk(chunk_i + 1, chunk_j, Math.floor(Math.random()*texCount));
	if (typeof world[chunk_i + 1][chunk_j + 1] == 'undefined')
		addChunk(chunk_i + 1, chunk_j + 1, Math.floor(Math.random()*texCount));
	if (typeof world[chunk_i + 1][chunk_j - 1] == 'undefined')
		addChunk(chunk_i + 1, chunk_j - 1, Math.floor(Math.random()*texCount));
		
	if (typeof world[chunk_i - 1] == 'undefined' || typeof world[chunk_i - 1][chunk_j] == 'undefined')
		addChunk(chunk_i - 1, chunk_j, Math.floor(Math.random()*texCount));
	if (typeof world[chunk_i - 1][chunk_j + 1] == 'undefined')
		addChunk(chunk_i - 1, chunk_j + 1, Math.floor(Math.random()*texCount));
	if (typeof world[chunk_i - 1][chunk_j - 1] == 'undefined')
		addChunk(chunk_i - 1, chunk_j - 1, Math.floor(Math.random()*texCount));
};