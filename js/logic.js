var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
};

const preCacheLevel = 3;

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
	
	for (var i = -preCacheLevel; i < preCacheLevel * 2 + 1; i++)
	{
		for (var j = -preCacheLevel; j < preCacheLevel * 2 + 1; j++)
		{
			if (typeof world[chunk_i + i] == 'undefined' || typeof world[chunk_i + i][chunk_j + j] == 'undefined')
				addChunk(chunk_i + i, chunk_j + j, Math.floor(Math.random()*texCount));
		}
	}
};