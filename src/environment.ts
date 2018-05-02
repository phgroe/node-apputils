export const { isDevelop, isLive, isTest } = (() => {
	let env = process.env.NODE_ENV || '';

	if (0 > ['live', 'develop', 'test'].indexOf (env)) {
		env = 'develop';
	}

	return {
		isDevelop: env === 'develop',
		isLive: env === 'live',
		isTest: env === 'test',
	};
})();
