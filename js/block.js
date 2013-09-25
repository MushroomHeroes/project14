const blockSize = 32;

function block(textureID, isWall)
{
	this.isWall = isWall;
	this.textureID = textureID;
	//if (!isWall)
		this.type = "floor";
	//else this.type = "wall";
}