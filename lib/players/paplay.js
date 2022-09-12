const { NodeAudioPlayer, NodeAudioPlayerOptions } = require('./base');

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

module.exports = { PAPlay }