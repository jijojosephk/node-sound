const { execSync, spawn } = require('child_process');
const { Utilities } = require('./lib/utilities');
const { NodeAudioPlayer } = require('./lib/players')

// List of supported players
const SUPPORTED_PLAYERS = [
    'paplay',
    'mplayer'
];

class NodeAudio {
    /**
     * @returns {NodeAudioPlayer}
     */
    static getDefaultPlayer() {
        console.log(Utilities.getFirstInstalled(SUPPORTED_PLAYERS));
    }

    /**
     * @returns {NodeAudioPlayer}
     */
    static getPlayer() {

    }
}

module.exports = { NodeAudio }