import { Config } from 'convict';
declare type FinalizeCallback<S> = (schema: Config<S>) => void;
export declare function finalizeConfig<S>(schema: Config<S>, callback?: FinalizeCallback<S>): S;
export {};
