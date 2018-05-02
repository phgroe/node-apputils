import { inspect as utilInspect } from 'util';

export const inspect = (
	obj : any,
	depth : number|null = null,
	colors = true,
	linebreak = true
) : string => utilInspect (obj, {
	breakLength: linebreak ? 128 : Infinity,
	colors,
	depth,
	showHidden: true,
});
