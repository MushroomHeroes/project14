//textures count
const texCount = 6;

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

//------------------

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

//-------------------

var textures = [];
textures["floor"] = [];
for (var tex_i = 0; tex_i < texCount; tex_i++)
{
	textures["floor"][tex_i] = new texture("floor", tex_i);
}

function texture(type, id)
{
	this.type = type;
	this.id = id;
	this.textureReady = false;
	this.textureImage = new Image();
	this.textureImage.onload = function ()
	{
		this.textureReady = true;
	};	
	this.textureImage.src = "images/textures/" + type + "_" + id + ".png"; 
	//TODO: обработать иксэпшон если файл не найден
}

// Draw everything
var render = function () 
{
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	
	if (bgReady) {
		ctx.drawImage(bgImage, canvas.width/4 - hero.x/4, canvas.height/4 - hero.y/4);
	}
	
	//if (textureReady) {
		drawWorld();
	//}
	
	if (heroReady) {
		ctx.drawImage(heroImage, canvas.width/2 - hero.width/2, canvas.height/2 - hero.height/2, hero.width, hero.height);
	}

	// debug text
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "14px Consolas";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText(Math.round(hero.x - canvas.width/2) + " " + Math.round(hero.y - canvas.height/2), canvas.width/2 + hero.width/2, canvas.height/2 - hero.height/2);
};

var drawWorld = function()
{
	var x = 0;
	var y = 0;
	
	for (var chunk_i = min_chunk_i; chunk_i < max_chunk_i + 1; chunk_i++)
		for (var chunk_j = min_chunk_j; chunk_j < max_chunk_j + 1 ; chunk_j++)
		{	
			if (typeof world[chunk_i] == 'undefined' || typeof world[chunk_i][chunk_j] == 'undefined')
				continue;
				
			for (var block_i = 0; block_i < chunkSize; block_i++)
				for (var block_j = 0; block_j < chunkSize; block_j++)
				{				
					x = chunk_i*chunkSize*blockSize + block_i*blockSize - hero.x + canvas.width;
					y = chunk_j*chunkSize*blockSize + block_j*blockSize - hero.y + canvas.height;
					if (x > canvas.width - 20 || x < 20 - blockSize ||
						y > canvas.height - 20 || y < 20 - blockSize)
						continue;
					var currentBlock = world[chunk_i][chunk_j].blocks[block_i, block_j];
					ctx.drawImage(textures[currentBlock.type][currentBlock.textureID].textureImage, x, y, blockSize, blockSize);
				}
		}
}








