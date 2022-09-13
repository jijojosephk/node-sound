const { Utilities } = require('./lib/utilities');
// eslint-disable-next-line no-unused-vars
const { NodeAudioPlayer, DefaultPlayer } = require('./lib/players');

// List of supported players
const SUPPORTED_PLAYERS = [
	{
		command: 'paplay',
		handlerClass: DefaultPlayer
	},
	{
		command: 'aplay',
		handlerClass: DefaultPlayer
	}
];

class NodeAudio {
	/**
	 * @returns {NodeAudioPlayer}
	 */
	static getDefaultPlayer() {
		const player = Utilities.getFirstInstalled(getSupportedPlayerNames());
		if (!player) {
			throw new Error('No supported players installed in the system');
		} else {
			const handlerClass = getHandlerClass(player);
			return new handlerClass(player);
		}
	}

	/**
	 * @returns {NodeAudioPlayer}
	 */
	static getPlayer() {
	}
}

function getSupportedPlayerNames() {
	return SUPPORTED_PLAYERS.map(p => {
		return p.command;
	});
}

function getHandlerClass(command) {
	return SUPPORTED_PLAYERS.filter(p => {
		return p.command === command;
	})[0].handlerClass;
}

module.exports = {
	NodeAudio
};