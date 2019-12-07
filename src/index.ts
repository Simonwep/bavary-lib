import {ENV_VERSION}        from './env';
import {concat}             from './functions/concat';
import {count}              from './functions/count';
import {ParsingFunctionSet} from './types';

/**
 * Current version
 */
export const version = ENV_VERSION;

// Functions
export const functions: ParsingFunctionSet = {
    concat,
    count
};

// Util to specify functions you want to use as array
export const use = (names: Array<string>): ParsingFunctionSet => {
    const set = {} as ParsingFunctionSet;

    for (const name of names) {
        if (name in functions) {
            set[name] = functions[name];
        } else {
            throw new Error(`Unknown function: ${name}`);
        }
    }

    return set;
};
