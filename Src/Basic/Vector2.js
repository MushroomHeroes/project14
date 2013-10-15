/* This class used to manage VEctors */
function Vector2(x, y) {
	var self = this;

	/* PROPERTIES */
	self.x = 0;
	self.y = 0;

	//constructor
	__construct = function (that) {
		if (x !== 'undefined') {
			that.x = x;
		} if (y !== 'undefined') {
			that.y = y;
		}
	}(this)
}

/* METHODS */
Vector2.prototype.asArray = function () {
	return [this.x, this.y];
};


Vector2.prototype.add = function (x, y) {
	return new Rect({
		x: this.x + x,
		y: this.y + y,
	});
};


Vector2.prototype.zero = function () {
	return new Vector2(0, 0);
};

var sign = function (x) {
	return x ? x < 0 ? -1 : 1 : 0;
};

Vector2.prototype.one = function () {
	return new Vector2(sign(this.x), sign(this.y));
};


Vector2.prototype.distance = function (x, y) {
	var xs = this.x - x;
	xs *= xs;

	ys = this.y - y;
	ys *= ys;

	return Math.sqrt(xs + ys);
};
