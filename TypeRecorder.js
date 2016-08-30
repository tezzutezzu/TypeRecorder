module.exports =  function () {

	var ctl; 
	var keySequence = [];
	var currentStroke;
	var textbox;
	var currentTime; 
	var completeCallback;

	function onKeyDown(e) {

		
		if(e.key == "Enter") {
			if(completeCallback && textbox.value != "") completeCallback()
		} else {
			var tempTime = new Date().getTime();
			var timeFromLastStroke = currentStroke ? tempTime - currentTime :  0;
			currentTime = tempTime;
			currentStroke = [ e.key, timeFromLastStroke, textbox.selectionStart];
			keySequence.push(currentStroke);
		}
	}


	function reset() {
		keySequence = [];
		currentStroke = null;
		textbox.value = "";
		textbox.focus();
	}

	return  {
		init: function(div, cb) {
			textbox = div;
			completeCallback = cb;
			textbox.addEventListener("keydown", onKeyDown.bind(this));
		},

		getSequence: function() {
			return keySequence.slice(0);
		},

		getText: function() {
			return textbox.value;
		},

		reset: function() {
			reset();
		}

	}
}
