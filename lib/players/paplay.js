const { spawn } = require('child_process');
const { NodeAudioPlayer, NodeAudioPlayerOptions } = require('./base');

class PAPlay extends NodeAudioPlayer {
    constructor() {
        super();
    }

    /**
     * @param {string} file 
     * @param {NodeAudioPlayerOptions} options 
     * @returns {Promise<void>}
     */
    play(file, options) {
        if (this.isPlaying) {
            return new Promise((resolve, reject) => {
                resolve();
            });
        } else {
            this.isPlaying = true;
            return new Promise((resolve, reject) => {
                const proc = spawn('paplay', [file]);
                proc.on('error', onExecutionFailed(reject));
                proc.on('close', onExecutionCompleted(resolve));
                proc.on('exit', onExecutionCompleted(resolve));
            })
        }
    }

    stop() {
        throw new Error('Method not implemented')
    }
}

function onExecutionCompleted(resolve) {
    return () => {
        resolve();
    }
}

function onExecutionFailed(reject) {
    return (err) => {
        reject(err);
    }
}

module.exports = { PAPlay }