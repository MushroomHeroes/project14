var min_chunk_i = 0;
var max_chunk_i = 0;
var min_chunk_j = 0;
var max_chunk_j = 0;
const chunkSize = 8;

function chunk() 
{
	var textureID;
	var rand;
	var isWall = false;
	this.blocks = [chunkSize];
    for (var i = 0; i < chunkSize; i++)
	{
		this.blocks[i] = [chunkSize];
		for (var j = 0; j < chunkSize; j++)
		{
			textureID = texCount - 1 - Math.floor(Math.log(Math.random()*Math.pow(2, texCount))/Math.log(2));
			if (textureID > texCount - 1) 
				textureID = texCount - 2;
			if (textureID == 6 ||textureID == 7)
				isWall = true;
			else
				isWall = false;
				
			this.blocks[i][j] = new block(textureID, isWall);
		}
	}
	
    /*this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };*/
}

var addChunk = function (i, j, textureID)
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
	world[i][j] = new chunk(textureID);
}