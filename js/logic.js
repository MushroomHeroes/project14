var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
};

const preCacheLevel = 3;

// Update game objects
var update = function (modifier) 
{
	var x = hero.x - canvas.width/2;
	var y = hero.y - canvas.height/2;
	var chunk_i;
	var chunk_j;
	var block_i;
	var block_j;
	
	var curChunk_i1 = Math.floor(x / blockSize / chunkSize); //top left corner
	var curChunk_i2 = Math.floor((x + hero.baseWidth) / blockSize / chunkSize); //top right corner
	var curChunk_j1 = Math.floor(y / blockSize / chunkSize); //bottom left corner
	var curChunk_j2 = Math.floor((y + hero.baseHeight) / blockSize / chunkSize); //bottom right corner
	
	var curBlock_i1 = Math.floor(x / blockSize) % chunkSize; //top left corner
	var curBlock_i2 = Math.floor((x + hero.baseWidth) / blockSize) % chunkSize; //top right corner
	var curBlock_j1 = Math.floor(y / blockSize) % chunkSize; //bottom left corner
	var curBlock_j2 = Math.floor((y + hero.baseHeight) / blockSize) % chunkSize; //bottom right corner
	
	if (curBlock_i1 < 0)
		curBlock_i1 = chunkSize + curBlock_i1;
	if (curBlock_i2 < 0)
		curBlock_i2 = chunkSize + curBlock_i2;
	if (curBlock_j1 < 0)
		curBlock_j1 = chunkSize + curBlock_j1;
	if (curBlock_j2 < 0)
		curBlock_j2 = chunkSize + curBlock_j2;
	
	if (38 in keysDown) 
	{ // Player holding up
		chunk_j = Math.floor((y - hero.baseHeight) / blockSize / chunkSize);
		block_j = Math.floor((y - hero.baseHeight) / blockSize) % chunkSize;
		if (block_j < 0)
			block_j = chunkSize + block_j;
		
		if (block_j == chunkSize)
		{	
			block_j = 0;
			block_j++;
		}

		var adjBlockLeft = world[curChunk_i1][chunk_j].blocks[curBlock_i1][block_j];
		var adjBlockRight = world[curChunk_i2][chunk_j].blocks[curBlock_i2][block_j];
		if (adjBlockLeft.isWall == false && adjBlockRight.isWall == false)
			hero.y -= hero.speed * modifier;
		else
		{
			var possiblePosY1 = (hero.y - hero.speed * modifier);
			var possiblePosY2 = (curChunk_j1 * chunkSize * blockSize + curBlock_j1 * blockSize + hero.baseHeight/2 + canvas.height/2);
			console.log(possiblePosY1 + " " + possiblePosY2);
			hero.y = Math.max(possiblePosY1, possiblePosY2);
		}
	}
	if (40 in keysDown) 
	{ // Player holding down
		chunk_j = Math.floor((y + hero.baseHeight) / blockSize / chunkSize);
		block_j = Math.floor((y + hero.baseHeight) / blockSize) % chunkSize;
		if (block_j < 0)
			block_j = chunkSize + block_j;
		
		if (block_j == chunkSize)
		{	
			block_j = 0;
			block_j++;
		}

		var adjBlockLeft = world[curChunk_i1][chunk_j].blocks[curBlock_i1][block_j];
		var adjBlockRight = world[curChunk_i2][chunk_j].blocks[curBlock_i2][block_j];
		if (adjBlockLeft.isWall == false && adjBlockRight.isWall == false)
			hero.y += hero.speed * modifier;
		else
		{
			var possiblePosY1 = (hero.y + hero.speed * modifier);
			var possiblePosY2 = (curChunk_j1 * chunkSize * blockSize + curBlock_j1 * blockSize + hero.baseHeight/2 + canvas.height/2);
			console.log(possiblePosY1 + " " + possiblePosY2);
			hero.y = Math.min(possiblePosY1, possiblePosY2);
		}
	}
	if (37 in keysDown) 
	{ // Player holding left
		chunk_i = Math.floor((x - blockSize) / blockSize / chunkSize);
		block_i = Math.floor((x - blockSize) / blockSize) % chunkSize;
		if (block_i < 0)
			block_i = chunkSize + block_i;

		var adjBlockTop = world[chunk_i][curChunk_j1].blocks[block_i][curBlock_j1];
		var adjBlockBot = world[chunk_i][curChunk_j2].blocks[block_i][curBlock_j2];
		if (adjBlockTop.isWall == false && adjBlockBot.isWall == false)
			hero.x -= hero.speed * modifier;
		else
		{
			var possiblePosX1 = (hero.x - hero.speed * modifier);
			var possiblePosX2 = (curChunk_i1 * chunkSize * blockSize + curBlock_i1 * blockSize + hero.width/2 + canvas.width / 2);
			console.log(possiblePosX1 + " " + possiblePosX2);
			hero.x = Math.max(possiblePosX1, possiblePosX2);
		}
	}
	if (39 in keysDown) 
	{ // Player holding right
		chunk_i = Math.floor((x + hero.baseWidth) / blockSize / chunkSize);
		block_i = Math.floor((x + hero.baseWidth) / blockSize) % chunkSize;
		if (block_i < 0)
			block_i = chunkSize + block_i;
		
		if (block_i == chunkSize)
		{	
			block_i = 0;
			chunk_i++;
		}

		var adjBlockTop = world[chunk_i][curChunk_j1].blocks[block_i][curBlock_j1];
		var adjBlockBot = world[chunk_i][curChunk_j2].blocks[block_i][curBlock_j2];
		if (adjBlockTop.isWall == false && adjBlockBot.isWall == false)
			hero.x += hero.speed * modifier;
		else
		{
			var possiblePosX1 = (hero.x + hero.speed * modifier);
			var possiblePosX2 = (curChunk_i1 * chunkSize * blockSize + curBlock_i1 * blockSize + hero.baseWidth/2 + canvas.width/2);
			console.log(possiblePosX1 + " " + possiblePosX2);
			hero.x = Math.min(possiblePosX1, possiblePosX2);
		}
	}
	
	//create chunks on the fly
	chunk_i = Math.floor(x / blockSize / chunkSize);
	chunk_j = Math.floor(y / blockSize / chunkSize);
	
	for (var i = -preCacheLevel; i < preCacheLevel * 2 + 1; i++)
	{
		for (var j = -preCacheLevel; j < preCacheLevel * 2 + 1; j++)
		{
			if (typeof world[chunk_i + i] == 'undefined' || typeof world[chunk_i + i][chunk_j + j] == 'undefined')
				addChunk(chunk_i + i, chunk_j + j, Math.floor(Math.random()*texCount));
		}
	}
};