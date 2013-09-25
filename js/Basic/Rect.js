function Rect(params) {
	var self = this;

	//properties
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

	//methods

	Rect.prototype.asArray = function () {
		return [self.x, self.y, self.width, self.height];
	};

	Rect.prototype.add = function (rect) {
		return new Rect({
			x: self.x + rect.x,
			y: self.y + rect.y,
			width: self.width + rect.width,
			height: self.height + rect.height,
		});
	};
}