/* BaseComponent */
function BaseComponent(params) {
	var self = this;

	/* PROPERTIES */

	//constructor
	__construct = function () {

	}();

	/* PRIVATE STUFF */


	/* UPDATE */
	self.update = function (gameTime) {

	};

	/* RENDER */
	self.render = function (renderer) {
		
		if (self.isOpen) {
			/* chat is open */

			//draw bg
			renderer.fillStyle = "rgba(0, 0, 0, 0.5)";
			renderer.fillRect.apply(ctx, self.rect.asArray());

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



}