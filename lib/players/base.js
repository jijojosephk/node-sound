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

module.exports = { NodeAudioPlayer, NodeAudioPlayerOptions };