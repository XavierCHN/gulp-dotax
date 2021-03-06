//@ts-nocheck
import path from 'path';
import PluginError from 'plugin-error';
import through from 'through2';
import Vinyl from 'vinyl';
import JsonToTS from 'json-to-ts';

const keyvalues = require('keyvalues-node');

const PLUGIN_NAME = `gulp-dotax:kvToJS`;

export interface KVToJSOptions {
    fileName?: string;
    edit?: (json: object) => object;
    transform?: (json: object) => object;
    output?: 'json' | 'js';
    types?: boolean;
    jsMountPoint?: string;
    jsMountPointTypingName?: string;
}

export function kvToJS(options: KVToJSOptions) {
    const {
        fileName = 'sync_keyvalues.js',
        types = true,
        jsMountPoint = 'GameUI.CustomUIConfig()',
        jsMountPointTypingName = 'CustomUIConfig',
    } = options;

    let firstFile: Vinyl;
    let mergedFile = {} as any;
    function parseKV(file: Vinyl, enc: any, next: Function) {
        if (file.isNull()) {
            return this.queue(file); // pass along
        }

        if (file.isStream()) {
            return this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }

        if (!firstFile) firstFile = file;

        try {
            const kv = keyvalues.decode(file.contents.toString());
            const relativePath = path.relative(path.dirname(firstFile.path), file.path);
            const extname = path.extname(relativePath);
            const jsName = relativePath.replace(/\\|\//g, '_').replace(extname, '');
            // if kv has only one key, get the content of the key
            const kvKeys = Object.keys(kv);
            const kvData = kvKeys.length === 1 ? kv[kvKeys[0]] : kv;
            mergedFile[jsName] = kvData;
            next();
        } catch (err) {
            return this.emit('error', new PluginError(PLUGIN_NAME, err));
        }
    }

    function endStream() {
        if (!firstFile) return this.emit(`end`);
        try {
            const contents = `${Object.keys(mergedFile).map((name) => {
                return `${jsMountPoint}.${name} = ${JSON.stringify(mergedFile[name])}\n`;
            })}`;
            const output = new Vinyl({
                cwd: firstFile.cwd,
                base: firstFile.base,
                path: path.join(firstFile.base, fileName),
                contents: Buffer.from(contents),
            });
            this.emit(`data`, output);

            // if types is true, add typings
            if (types) {
                console.log(`${PLUGIN_NAME} Begin to generate typings, please wait!`);
                let types = JsonToTS(mergedFile);
                types[0] = types[0]
                    .split('\n')
                    .map((t, i) => (i == 0 ? `declare interface ${jsMountPointTypingName} {` : t))
                    .join('\n');
                for (let i = 1; i < types.length; i++) {
                    types[i] = `declare ${types[i]}`;
                }
                let typingsFileName = `${fileName}.d.ts`;
                console.log(`${PLUGIN_NAME} writing typings to ${typingsFileName}`);
                const typesOutput = new Vinyl({
                    cwd: firstFile.cwd,
                    base: firstFile.base,
                    path: path.join(firstFile.base, typingsFileName),
                    contents: Buffer.from(types.join('\n')),
                });
                this.emit(`data`, typesOutput);
            }

            this.emit(`end`);
        } catch (err) {
            this.emit('error', new PluginError(PLUGIN_NAME, err));
        }
    }

    return through.obj(parseKV, endStream);
}
