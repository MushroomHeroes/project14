var min_chunk_i = 0;
var max_chunk_i = 0;
var min_chunk_j = 0;
var max_chunk_j = 0;

function chunk() 
{
	this.blocks = [chunkSize, chunkSize]
    for (var i = 0; i < chunkSize; i++)
		for (var j = 0; j < chunkSize; j++)
		{
			this.blocks[i, j] = new block(0, false);
		}
	
    /*this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };*/
}