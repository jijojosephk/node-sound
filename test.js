const { NodeSound } = require('.');
const player = NodeSound.getDefaultPlayer();
const samplefile = 'samples/mixkit-dry-pop-up-notification-alert-2356.wav';
player.play(samplefile).then(() => {
})