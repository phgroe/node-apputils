import * as fs from 'fs';

import { join } from 'path';
import { promisify } from 'util';

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
