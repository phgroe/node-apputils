import { existsSync } from 'fs';

import {
	dirname,
	join,
	sep,
} from 'path';

/**
 * The filesystem root of the whole application
 */
export const rootPath : string = ( () => {
	const pathTokens = dirname (require.main.filename)
		.split (sep).filter (s => s.length > 0);

	let index = pathTokens.length;
	let found = false;
	let paths : string[] = [];

	while (!found && index >= 0)
	{
		paths = [ '/', ...(pathTokens.slice (0, index --)) ];
		found = existsSync (join (...paths, 'node_modules'));
	}

	return join (...(found ? paths : pathTokens));
})();
