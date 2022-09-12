class NodeAudioPlayerOptions {
    /**
     * @param {NodeAudioPlayerOptions} options 
     */
    constructor(options) {
    }
}

let _NodeAudioPlayer_isPlaying = new WeakMap();
class NodeAudioPlayer {
    /**
     * @param {string} file 
     * @param {NodeAudioPlayerOptions} options 
     * @returns {Promise<void>}
     */
    play(file, options) {
        throw new Error('Method not implemented')
    }

    stop() {
        throw new Error('Method not implemented')
    }

    /**
     * @type {boolean}
     */
    get isPlaying() {
        return _NodeAudioPlayer_isPlaying.get(this) ?? false;
    }

    set isPlaying(value) {
        _NodeAudioPlayer_isPlaying.set(this, typeof (value) === 'boolean' && value);
    }
}

module.exports = {
    NodeAudioPlayer,
    NodeAudioPlayerOptions
};