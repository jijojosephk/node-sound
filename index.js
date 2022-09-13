const { Utilities } = require('./lib/utilities');
// eslint-disable-next-line no-unused-vars
const { NodeSoundPlayer, DefaultPlayer } = require('./lib/players');

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

class NodeSound {
	/**
	 * @returns {NodeSoundPlayer}
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
	 * @returns {NodeSoundPlayer}
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
	NodeSound
};