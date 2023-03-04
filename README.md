# node-sound

This is a library to play audio files from nodejs applications. This is a work in progress and may not be stable. But you can use and share your feedbacks.

# Installation
`npm install node-sound`
or
`yarn add node-sound`

# Usage
```js
const { NodeSound } = require('node-sound');
const player = NodeSound.getDefaultPlayer();
player.play('sample.wav').then(() => {
	// TO DO
})
```