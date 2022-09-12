const { execSync } = require('child_process');
class Utilities {
    /**
     * Returns the first available command in the system from the list supplied.
     * @param {Array<string>} executables 
     */
    static getFirstInstalled(executables) {
        let commands = Array.isArray(executables) ? executables : [executables];
        return commands.filter(c => {
            return typeof (c) === 'string' && this.isInstalled(c);
        })[0];
    }

    /**
     * Checks if the specified executable is present in the system.
     * @param {string} executable Executable command.
     * @returns {boolean}
     */
    static isInstalled(executable) {
        try {
            execSync(`which ${executable}`);
            return true;
        }
        catch (e) {
            return false;
        }
    }
}

module.exports = { Utilities };