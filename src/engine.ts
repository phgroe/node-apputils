import { rootPath } from '.';

import { join } from 'path';
import { satisfies } from 'semver';

import {
	existsSync,
	readFile,
} from 'fs';


export async function checkEngineLight () {
	const pckgPath = join (rootPath, 'package.json');

	if (!existsSync (pckgPath)) {
		throw new Error (`Could not find ${pckgPath}`);
	}

	return new Promise ((resolve, reject) => (
		readFile (pckgPath, { encoding: 'utf8', flag: 'r' }, (err, data) => {
			if (err) {
				return reject (err);
			}

			const json = JSON.parse (data);

			if (satisfies (process.version, json.engines.node)) {
				return resolve ();
			}

			return Promise.reject (new Error (
				`Current NodeJS version does not satisfy "${json.engines.node}" requirement`
			));
		})
	));
}
