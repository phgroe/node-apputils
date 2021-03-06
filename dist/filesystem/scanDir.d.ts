/// <reference types="node" />
import * as fs from 'fs';
export declare type StatsWithPath = fs.Stats & {
    path: string;
};
export declare function scanDir(scanpath: string): Promise<StatsWithPath[]>;
