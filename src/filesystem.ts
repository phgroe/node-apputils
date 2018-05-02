import * as fs from 'fs';
import * as path from 'path';

//import { NotFoundError } from 'app/util/errors';
import { isTest } from './environment';

// The filesystem root of the whole project
export const rootPath : string = ( () => {
	const pathTokens = path.dirname (module.parent.parent.filename)
		.split (path.sep).filter (s => s.length > 0);

	let index = 1;
	let found = false;
	let paths : string[] = [];

	while (!found && index < pathTokens.length)
	{
		paths = [ '/', ...(pathTokens.slice (0, index ++)) ];
		found = fs.existsSync (path.join (...paths, 'node_modules'));
	}

	return path.join (...paths);
})();

/*findRoot((isTest && process.env.CWD !== undefined)
	? process.env.CWD
	: path.dirname(require.main.filename)); */

/*
export function loadResource(relativePath : string) : Promise <Buffer> {
	return new Promise((resolve, reject) => {
		const fullPath : string = path.join(rootPath, relativePath);

		fs.open(fullPath, 'r', (errOpen) => {
			if (errOpen) {
				if (errOpen.code === 'ENOENT') {
					return reject(new NotFoundError(`${fullPath} does not exist`));
				}

				return reject(errOpen);
			}

			fs.readFile(fullPath, (errRead, data : Buffer) => {
				if (errRead) {
					return reject(errRead);
				}

				return resolve(data);
			});
		});
	});
}

export function loadJSON(relativePath : string) : Promise <any> {
	return loadResource(relativePath)
		.then(buffer => JSON5.parse(buffer.toString()));
}

export function scanDir(folderName : string) : Promise <string[]> {
	return new Promise((resolve, reject) => {
		fs.readdir(folderName, (err, files : string[]) => {
			return err ? reject(err) : resolve(files);
		});
	});
}

export function watchFile(relativePath : string, callback : any) : Promise <fs.FSWatcher> {
	const fullPath : string = path.join(rootPath, relativePath);
	return new Promise((resolve) => {
		return resolve(fs.watch(fullPath, {}, callback));
	});
}
*/
