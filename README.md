# TypeRecorder
Records and play back typing in a text input element


### Usage
```javascript
var TypeRecorder = require("./TypeRecorder");
var TypePlayer = require("./TypePlayer");

var recorder = new TypeRecorder();
recorder.init(document.getElementById('textbox'));

var player = new TypePlayer();
player.init(document.getElementById('replaybox'));

var seq = recorder.getSequence();
player.play(seq);
```
