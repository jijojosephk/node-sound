const { Utilities } = require('./lib/utilities');
const { NodeAudioPlayer, PAPlay } = require('./lib/players')

// List of supported players
const SUPPORTED_PLAYERS = [
    {
        command: 'paplay',
        handlerClass: PAPlay
    }
];

class NodeAudio {
    /**
     * @returns {NodeAudioPlayer}
     */
    static getDefaultPlayer() {
        const player = Utilities.getFirstInstalled(SUPPORTED_PLAYERS.map(p => {
            return p.command;
        }));

        if (!player) {
            throw new Error('No supported players installed in the system');
        } else {
            const handlerClass = SUPPORTED_PLAYERS.filter(p => {
                return p.command === player;
            })[0].handlerClass;
            return new handlerClass();
        }
    }

    /**
     * @returns {NodeAudioPlayer}
     */
    static getPlayer() {

    }
}

module.exports = { NodeAudio }