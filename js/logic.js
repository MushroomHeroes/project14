var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
};

const preCacheLevel = 3;

var recountHeroCurPos = function()
{
	hero.abs_x = hero.x - canvas.width/2;
	hero.abs_y = hero.y - canvas.height/2;

	hero.curChunk_i1 = Math.floor((hero.abs_x) / blockSize / chunkSize); //top left corner
	hero.curChunk_i2 = Math.floor((hero.abs_x + hero.baseWidth) / blockSize / chunkSize); //top right corner
	hero.curChunk_j1 = Math.floor((hero.abs_y) / blockSize / chunkSize); //bottom left corner
	hero.curChunk_j2 = Math.floor((hero.abs_y + hero.baseHeight) / blockSize / chunkSize); //bottom right corner
	
	hero.curBlock_i1 = Math.floor((hero.abs_x) / blockSize) % chunkSize; //top left corner
	hero.curBlock_i2 = Math.floor((hero.abs_x + hero.baseWidth) / blockSize) % chunkSize; //top right corner
	hero.curBlock_j1 = Math.floor((hero.abs_y) / blockSize) % chunkSize; //bottom left corner
	hero.curBlock_j2 = Math.floor((hero.abs_y + hero.baseHeight) / blockSize) % chunkSize; //bottom right corner
	
	if (hero.curBlock_i1 < 0)
		hero.curBlock_i1 += chunkSize;
	if (hero.curBlock_i2 < 0)
		hero.curBlock_i2 += chunkSize;
	if (hero.curBlock_j1 < 0)
		hero.curBlock_j1 += chunkSize;
	if (hero.curBlock_j2 < 0)
		hero.curBlock_j2 += chunkSize;
}

// Update game objects
var update = function (modifier) 
{
	recountHeroCurPos();
	
	var chunk_i;
	var chunk_j;
	var block_i;
	var block_j;
	
	if (38 in keysDown || 87 in keysDown) 
	{ // Player holding up
		chunk_j = Math.floor((hero.abs_y - hero.baseHeight) / blockSize / chunkSize);
		block_j = Math.floor((hero.abs_y - hero.baseHeight) / blockSize) % chunkSize;
		if (block_j < 0)
			block_j = chunkSize + block_j;
		
		if (block_j == chunkSize)
		{	
			block_j = 0;
			block_j++;
		}

		var adjBlockLeft = world[hero.curChunk_i1][chunk_j].blocks[hero.curBlock_i1][block_j];
		var adjBlockRight = world[hero.curChunk_i2][chunk_j].blocks[hero.curBlock_i2][block_j];
		if (adjBlockLeft.isWall == false && adjBlockRight.isWall == false)
			hero.y -= hero.speed * modifier;
		else
		{
			var possiblePosY1 = (hero.y - hero.speed * modifier);
			var possiblePosY2 = (hero.curChunk_j1 * chunkSize * blockSize + hero.curBlock_j1 * blockSize + hero.baseHeight/2 + canvas.height/2);
			console.log(possiblePosY1 + " " + possiblePosY2);
			hero.y = Math.max(possiblePosY1, possiblePosY2);
		}
	}
	if (40 in keysDown || 83 in keysDown) 
	{ // Player holding down
		chunk_j = Math.floor((hero.abs_y + hero.baseHeight) / blockSize / chunkSize);
		block_j = Math.floor((hero.abs_y + hero.baseHeight) / blockSize) % chunkSize;
		if (block_j < 0)
			block_j = chunkSize + block_j;
		
		if (block_j == chunkSize)
		{	
			block_j = 0;
			block_j++;
		}

		var adjBlockLeft = world[hero.curChunk_i1][chunk_j].blocks[hero.curBlock_i1][block_j];
		var adjBlockRight = world[hero.curChunk_i2][chunk_j].blocks[hero.curBlock_i2][block_j];
		if (adjBlockLeft.isWall == false && adjBlockRight.isWall == false)
			hero.y += hero.speed * modifier;
		else
		{
			var possiblePosY1 = (hero.y + hero.speed * modifier);
			var possiblePosY2 = (hero.curChunk_j1 * chunkSize * blockSize + hero.curBlock_j1 * blockSize + hero.baseHeight/2 + canvas.height/2);
			console.log(possiblePosY1 + " " + possiblePosY2);
			hero.y = Math.min(possiblePosY1, possiblePosY2);
		}
	}
	if (37 in keysDown || 65 in keysDown) 
	{ // Player holding left
		chunk_i = Math.floor((hero.abs_x - blockSize) / blockSize / chunkSize);
		block_i = Math.floor((hero.abs_x - blockSize) / blockSize) % chunkSize;
		if (block_i < 0)
			block_i = chunkSize + block_i;

		var adjBlockTop = world[chunk_i][hero.curChunk_j1].blocks[block_i][hero.curBlock_j1];
		var adjBlockBot = world[chunk_i][hero.curChunk_j2].blocks[block_i][hero.curBlock_j2];
		if (adjBlockTop.isWall == false && adjBlockBot.isWall == false)
			hero.x -= hero.speed * modifier;
		else
		{
			var possiblePosX1 = (hero.x - hero.speed * modifier);
			var possiblePosX2 = (hero.curChunk_i1 * chunkSize * blockSize + hero.curBlock_i1 * blockSize + hero.width/2 + canvas.width / 2);
			console.log(possiblePosX1 + " " + possiblePosX2);
			hero.x = Math.max(possiblePosX1, possiblePosX2);
		}
	}
	if (39 in keysDown || 68 in keysDown) 
	{ // Player holding right
		chunk_i = Math.floor((hero.abs_x + hero.baseWidth) / blockSize / chunkSize);
		block_i = Math.floor((hero.abs_x + hero.baseWidth) / blockSize) % chunkSize;
		if (block_i < 0)
			block_i = chunkSize + block_i;
		
		if (block_i == chunkSize)
		{	
			block_i = 0;
			chunk_i++;
		}

		var adjBlockTop = world[chunk_i][hero.curChunk_j1].blocks[block_i][hero.curBlock_j1];
		var adjBlockBot = world[chunk_i][hero.curChunk_j2].blocks[block_i][hero.curBlock_j2];
		if (adjBlockTop.isWall == false && adjBlockBot.isWall == false)
			hero.x += hero.speed * modifier;
		else
		{
			var possiblePosX1 = (hero.x + hero.speed * modifier);
			var possiblePosX2 = (hero.curChunk_i1 * chunkSize * blockSize + hero.curBlock_i1 * blockSize + hero.baseWidth/2 + canvas.width/2);
			console.log(possiblePosX1 + " " + possiblePosX2);
			hero.x = Math.min(possiblePosX1, possiblePosX2);
		}
	}
	
	//create chunks on the fly
	chunk_i = Math.floor(hero.abs_x / blockSize / chunkSize);
	chunk_j = Math.floor(hero.abs_y / blockSize / chunkSize);
	
	for (var i = -preCacheLevel; i < preCacheLevel * 2 + 1; i++)
	{
		for (var j = -preCacheLevel; j < preCacheLevel * 2 + 1; j++)
		{
			if (typeof world[chunk_i + i] == 'undefined' || typeof world[chunk_i + i][chunk_j + j] == 'undefined')
				addChunk(chunk_i + i, chunk_j + j, Math.floor(Math.random()*texCount));
		}
	}
};