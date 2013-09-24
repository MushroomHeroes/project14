var min_chunk_i = 0;
var max_chunk_i = 0;
var min_chunk_j = 0;
var max_chunk_j = 0;
const chunkSize = 2;

function chunk(textureID) 
{
	this.blocks = [chunkSize, chunkSize]
    for (var i = 0; i < chunkSize; i++)
		for (var j = 0; j < chunkSize; j++)
		{
			this.blocks[i, j] = new block(textureID, false);
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