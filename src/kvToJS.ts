//@ts-nocheck
import PluginError from 'plugin-error';
import through from 'through2';
import Vinyl from 'vinyl';
import path from 'path';

const keyvalues = require('keyvalues-node');

const PLUGIN_NAME = `gulp-dotax:kvToJS`;

export interface KVToJSOptions {
    // 是否将含有 ArraySeperator 的字符串转换为 array
    AutoConvertToArray?: boolean;
    /** 数组的分隔符 目前是 竖杠 | 和 # 号 */
    ArraySeperator?: string;
}

export function kvToJS(options?: KVToJSOptions) {
    const { AutoConvertToArray = true, ArraySeperator = /[\|#]/ } = options ?? {};
    function parseKV(file: Vinyl, enc: any, next: Function) {
        if (file.isNull()) {
            return next(null, file);
        }

        if (file.isStream()) {
            return this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }

        try {
            const kv = keyvalues.decode(file.contents.toString());
            const kvKeys = Object.keys(kv);
            const kvData = kvKeys.length === 1 ? kv[kvKeys[0]] : kv;

            const jsonData = JSON.stringify(
                kvData,
                (key, value) => {
                    // 如果是数字，直接输出数字
                    if (typeof value === 'string' && !isNaN(Number(value))) {
                        return Number(value);
                    }
                    // 如果是用 '|' 或者 '#' 分割的字符串，那么直接输出成数组
                    // 如果AutoConvertToArray为true的话
                    // 默认为true
                    if (
                        AutoConvertToArray &&
                        typeof value === 'string' &&
                        ArraySeperator.test(value)
                    ) {
                        return value.split(ArraySeperator).map((v) => v.trim());
                    }
                    return value;
                },
                '  '
            );
            // change base of file.basename to .json
            const jsonFileName = file.basename.replace(path.extname(file.basename), '.json');
            const jsonFile = new Vinyl({
                base: file.base,
                path: file.path,
                basename: jsonFileName,
                contents: Buffer.from(jsonData),
            });
            this.push(jsonFile);
            next();
        } catch (err) {
            return this.emit('error', new PluginError(PLUGIN_NAME, err));
        }
    }

    return through.obj(parseKV);
}
