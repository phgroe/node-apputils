import { Config } from 'convict';

import { existsSync } from 'fs';
import { join } from 'path';
import { rootPath } from '.';


type FinalizeCallback <S> = (schema : Config <S>) => void;


export function finalizeConfig <S> (
	schema : Config <S>,
	callback? : FinalizeCallback <S>
) : S
{
	const configFile = join (rootPath, 'config.json5');

	if (existsSync (configFile))
	{
		try {
			schema.loadFile (configFile);
		}
		catch (error) {
			console.error ('Error while trying to load %s', configFile);
			console.error (error);
		}
	}

	if (callback) {
		callback (schema);
	}

	schema.validate({
		allowed: 'strict',
	});

	return Object.freeze (schema.getProperties ());
}
