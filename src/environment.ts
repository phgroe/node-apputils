export const { isDevelop, isLive, isTest } = (() => {
	let env = process.env.NODE_ENV || '';

	if (0 > ['develop', 'live', 'production', 'test'].indexOf (env)) {
		env = 'develop';
	}

	return {
		isDevelop: env === 'develop',
		isLive: env === 'live' || env === 'production',
		isTest: env === 'test',
	};
})();
