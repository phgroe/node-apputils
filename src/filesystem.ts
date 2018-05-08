import * as fs from 'fs';

import {
	dirname,
	join,
	sep as pathSeparator,
} from 'path';

import { promisify } from 'util';

// The filesystem root of the whole project
export const rootPath : string = ( () => {
	const pathTokens = dirname (module.parent.parent.filename)
		.split (pathSeparator).filter (s => s.length > 0);

	let index = 1;
	let found = false;
	let paths : string[] = [];

	while (!found && index < pathTokens.length)
	{
		paths = [ '/', ...(pathTokens.slice (0, index ++)) ];
		found = fs.existsSync (join (...paths, 'node_modules'));
	}

	return join (...paths);
})();

export type StatsWithPath = fs.Stats & { path : string };

export async function scanDir (scanpath : string) : Promise <StatsWithPath[]> {
	const readdir = promisify (fs.readdir);
	const stat = promisify (fs.stat);

	const joiner = (name : string) => join (scanpath, name);

	const resolver = (path : string) => (
		stat(path).then((st : fs.Stats) => Object.assign(st, { path }))
	);

	const files : string[] = await readdir (scanpath, 'utf8');

	return Promise.all (files.map (joiner).map (resolver));
}
