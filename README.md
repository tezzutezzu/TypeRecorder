# TypeRecorder
Records and play back typing from a text input element to another DOM element

### Usage

#### Initialization 
```javascript
var TypeRecorder = require("./TypeRecorder");
var TypePlayer = require("./TypePlayer");

var recorder = new TypeRecorder();
recorder.init(document.getElementById('textbox'));

var player = new TypePlayer();
player.init(document.getElementById('replaybox'));

```


#### Replaying the type sequence

```javascript
var seq = recorder.getSequence();
player.play(seq);
```
