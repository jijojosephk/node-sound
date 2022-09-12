const { execSync, spawn } = require('child_process');
const _supportedPlayers = [
    'paplay',
    'mplayer'
];

class NodeAudio {
    static getDefaultPlayer() {
        isPlayerInstalled('');
    }

    static getPlayer() {

    }
}

function getAvailablePlayer() {

}

function isPlayerInstalled(player) {
    try {
        execSync(`which ${player}`);
        return false;
    }
    catch (e) {
        return false;
    }
}

let _NodeAudioPlayerOptions_loop = new WeakMap();
class NodeAudioPlayerOptions {
    /**
     * @param {NodeAudioPlayerOptions} options 
     */
    constructor(options) {
        options = options || {};
        this.loop = options.loop;
    }

    /**
     * @type {number}
     */
    get loop() {
        return _NodeAudioPlayerOptions_loop.get(this);
    }

    set loop(value) {
        _NodeAudioPlayerOptions_loop.set(this, typeof (value) == 'number' ? value : -1);
    }
}

class NodeAudioPlayer {
    /**
     * @param {string} file 
     * @param {NodeAudioPlayerOptions} options 
     */
    play(file, options) {
        throw new Error('Method not implemented')
    }

    stop() {
        throw new Error('Method not implemented')
    }
}

class PAPlay extends NodeAudioPlayer {
    constructor() {
        super();
    }

    /**
     * @param {string} file 
     * @param {NodeAudioPlayerOptions} options 
     */
    play(file, options) {
        throw new Error('Method not implemented')
    }

    stop() {
        throw new Error('Method not implemented')
    }
}

module.exports = { NodeAudio }