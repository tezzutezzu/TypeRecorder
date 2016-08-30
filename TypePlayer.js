module.exports =  function () {
	
	var SPEED = .25;
	var playingSequence = [];
	var textnode;
	var callback;
	var cursor = document.createElement("span");
	cursor.textContent = "|";
	cursor.className = "cursor";

	var currentTimeout;

	function play() {

		textnode.appendChild(cursor);
		if(playingSequence.length > 0) {
			currentStroke = playingSequence.shift();
			display();
		}

	}

	function display() {

		var len = playingSequence.length;
		var addCharacterIndex =  currentStroke[2];
		textnode.removeChild(cursor);
		if(len >= 0) {
			var  c = currentStroke[0];
			if(c == "Backspace") {

				textnode.removeChild(textnode.childNodes[addCharacterIndex-1]);

			} else if(c != "Shift" && c != "Alt" && c != "ArrowLeft" && c != "ArrowRight" &&  c != "Control" && c != "Meta") {

				// default behaviour
				var p = document.createElement("span");
				p.textContent = currentStroke[0];
				textnode.insertBefore(p, textnode.childNodes[addCharacterIndex]);

			}

			textnode.insertBefore(cursor, textnode.childNodes[addCharacterIndex+1]);

		}
		if(playingSequence.length > 0)  {
			currentTimeout = setTimeout(play.bind(this), playingSequence[0][1] * SPEED);
		}else {
			cursor.className = "hidden";
			if(callback) callback();
		}

	}



	return  {
		init: function(div, cb) {

			textnode = div;	
			callback = cb;
		},

		play: function(seq) {
			this.reset();
			cursor.className = "cursor";
			playingSequence = seq;
			play();
		},

		reset: function() {
			if(currentTimeout) clearTimeout(currentTimeout);
			while (textnode.firstChild) {
				textnode.removeChild(textnode.firstChild);
			}
		}
	}

};



