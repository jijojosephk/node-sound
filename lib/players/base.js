class NodeAudioPlayerOptions {
	/**
	 * @param {NodeAudioPlayerOptions} options 
	 */
	// eslint-disable-next-line no-unused-vars
	constructor(options) {
	}
}

let _NodeAudioPlayer_command = new WeakMap();
let _NodeAudioPlayer_isPlaying = new WeakMap();
class NodeAudioPlayer {
	constructor(command) {
		this.isPlaying = false;
		this.command = command;
	}
	/**
	 * @param {string} file 
	 * @param {NodeAudioPlayerOptions} options 
	 * @returns {Promise<void>}
	 */
	// eslint-disable-next-line no-unused-vars
	play(file, options) {
		throw new Error('Method not implemented');
	}

	stop() {
		throw new Error('Method not implemented');
	}

	/**
	 * @type {string}
	 */
	get command() {
		return _NodeAudioPlayer_command.get(this);
	}

	set command(value) {
		_NodeAudioPlayer_command.set(this, typeof (value) === 'string' ? value : null);
	}

	/**
	 * @type {boolean}
	 */
	get isPlaying() {
		return _NodeAudioPlayer_isPlaying.get(this);
	}

	set isPlaying(value) {
		_NodeAudioPlayer_isPlaying.set(this, typeof (value) === 'boolean' && value);
	}
}

module.exports = {
	NodeAudioPlayer,
	NodeAudioPlayerOptions
};