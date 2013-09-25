function Chat(params) {
	var self = this;

	//properties
	self.isOpen = false;
	self.isLocked = false;

	self.rect = new Rect();

	//constructor
	__construct = function () {
		var chatHeight = 50;
		var chatWidth = 300;
		var padLeft = 10;
		var padBottom = 10;

		self.rect = new Rect({
			x: padLeft,
			y: canvas.height - padBottom - chatHeight,
			width: chatWidth,
			height: chatHeight
		});

	}()

	//methods

	self.update = function (modifier) {

		if (13 in keysUp && keysUp[13]) {
			self.isLocked = false;
		}

		if (13 in keysDown && keysDown[13]) {
			if (!self.isLocked) {
				self.isLocked = true;
				self.isOpen = !self.isOpen;
			}
		}
	};

	var baseTextStyle = {
		font: "14px Consolas",
		textAlign: "left",
		textBaseline: "top",
	};

	self.render = function (ctx) {

		if (self.isOpen) {
			/* chat is open */

			//draw bg
			ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
			ctx.fillRect.apply(ctx, self.rect.asArray());

			//draw caption
			drawText(ctx, {
				style: baseTextStyle,
				fillStyle: "rgb(250, 250, 250)",
				text: "Chat here",
				pos: self.rect.move(5, 5)
			});
			//draw messages
		} else {
			/* chat closed */
			drawText(ctx, {
				style: baseTextStyle,
				fillStyle: "rgba(0, 0, 0, 0.8)",
				text: "< Press Enter to Open Chat >",
				pos: self.rect.move(0, 35)
			});
		}

	};


	var drawText = function (ctx, params) {
		ctx.font = params.style.font;
		ctx.textAlign = params.style.textAlign;
		ctx.textBaseline = params.style.textBaseline;

		ctx.fillStyle = params.fillStyle;
		ctx.fillText(params.text, params.pos.x, params.pos.y);
	};
}