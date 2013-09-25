/* This class used to manage rect information */
function Rect(params) {
	var self = this;

	/* PROPERTIES */
	self.x = 0;
	self.y = 0;

	self.width = 0;
	self.height = 0;

	//constructor
	__construct = function (that) {
		if (params) {
			that.x = params.x;
			that.y = params.y;

			that.width = params.width;
			that.height = params.height;
		}
	}(this)
}

/* METHODS */
Rect.prototype.asArray = function () {
	return [this.x, this.y, this.width, this.height];
};

Rect.prototype.move = function (x, y) {
	return new Rect({
		x: this.x + x,
		y: this.y + y,
	});
};