const { Utilities } = require('../utilities');
// eslint-disable-next-line no-unused-vars
const { NodeSoundPlayer, NodeSoundPlayerOptions } = require('./base');

class DefaultPlayer extends NodeSoundPlayer {
	constructor(command) {
		super(command);
	}

	/**
	 * @param {string} file 
	 * @param {NodeSoundPlayerOptions} options 
	 * @returns {Promise<void>}
	 */
	// eslint-disable-next-line no-unused-vars
	play(file, options) {
		return Utilities.createCommandExecutionPromise(this.command, file);
	}

	stop() {
		throw new Error('Method not implemented');
	}
}

module.exports = {
	DefaultPlayer
};