var BaseEngine = function () {
	/* PROPERTIES */

	var self = this,
		startTime = 0,
		gameComponents = [],
		canvas = document.createElement('canvas');
	
	self.BackgroundColor = '#fff';
	self.Version = 0.1;

	/* METHODS */

	self.Init = function () {

		if (!canvas) {
			throw 'Canvas was not found!';
		}

		canvas.width = self.Width;
		canvas.height = self.Height;
		canvas.style.backgroundColor = self.BackgroundColor;

		self.Renderer = canvas.getContext('2d');
		document.body.appendChild(canvas);

		if (!window.requestAnimationFrame) {
			throw 'This browser does not support requestAnimationFrame!';
		}


		function GameLoop(currentTime) {
			if (!currentTime) {
				currentTime = startTime;
			}

			var now = new Date(currentTime).getMilliseconds();

			self.Update(now - startTime);
			self.Render(self.Renderer);

			startTime = now;

			window.requestAnimationFrame(GameLoop, canvas);
		};

		GameLoop();
	};

	self.Update = function (gameTime) {

		gameComponents.forEach(function (gc) {
			gc.Update(gameTime);
		});


	};

	self.Render = function (renderer) {
		renderer.clearRect(0, 0, self.Width, self.Height);

		gameComponents.forEach(function (gc) {
			gc.Render(renderer);
		});
	};

	self.AddComponent = function (component) {

		//todo: is instance of?
		gameComponents.push(component);
	};

	self.RemoveComponent = function (component) {

	};

	self.Init();
};

BaseEngine.prototype.Width = 800;
BaseEngine.prototype.Height = 600;