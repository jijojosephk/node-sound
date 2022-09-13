const { execSync, spawn } = require('child_process');
class Utilities {
	/**
	 * Returns the first available command in the system from the list supplied.
	 * @param {Array<string>} executables 
	 */
	static getFirstInstalled(executables) {
		let commands = Array.isArray(executables) ? executables : [executables];
		return commands.filter(c => {
			return this.isInstalled(c);
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

	static createEmptyPromise() {
		return new Promise((resolve) => {
			resolve();
		});
	}

	static createCommandExecutionPromise(...args) {
		return new Promise((resolve, reject) => {
			const proc = spawn(args[0], args.slice(1));
			proc.on('close', createSuccessHandler(resolve));
			proc.on('error', createFailureHandler(reject));
		});
	}
}

function createSuccessHandler(resolve) {
	return () => {
		resolve();
	};
}

function createFailureHandler(reject) {
	return (err) => {
		reject(err);
	};
}

module.exports = {
	Utilities
};