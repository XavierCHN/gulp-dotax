//@ts-nocheck
import PluginError from 'plugin-error';
import through from 'through2';
import Vinyl from 'vinyl';
import path from 'path';
import { KeyValues, LoadKeyValuesSync, AutoLoadKeyValuesBaseSync } from 'easy-keyvalues';

const PLUGIN_NAME = `gulp-dotax:kvToJS`;

export interface KVToJSOptions {
    // 是否将含有 ArraySeperator 的字符串转换为 array
    AutoConvertToArray?: boolean;
    /** 数组的分隔符 目前是 竖杠 | 和 # 号 */
    ArraySeperator?: string;
    /** 是否自动合并#base */
    AutoMergeBases?: boolean;
}

export function kvToJS(options?: KVToJSOptions) {
    const {
        AutoConvertToArray = true,
        ArraySeperator = /[\|#]/,
        AutoMergeBases = true,
    } = options ?? {};
    const parseKV = async (file: Vinyl, enc: any, next: Function) => {
        if (file.isNull()) {
            return next(null, file);
        }

        if (file.isStream()) {
            return next(new PluginError(PLUGIN_NAME, 'Streaming not supported'), file);
        }

        try {
            const kvFileName = file.path;
            const kv = LoadKeyValuesSync(kvFileName);
            let kvData = kv.toObject();
            delete kvData['#base']; // 移除所有的 #base，他们不需要被输出
            kvData = kvData[Object.keys(kvData)[0]] ?? {}; // 有可能主文件里面除了 #base 以外没有任何内容
            // 将所有的 #base 的内容合并到root
            // 这里有可能会有循环调用，因此不做递归
            // 坏处是不支持多层级的 #base
            // todo: 支持多层级的 #base
            if (AutoMergeBases) {
                AutoLoadKeyValuesBaseSync(kv, path.dirname(kvFileName));
                kv.GetChildren().forEach((child) => {
                    if (child.Key === '#base') {
                        const childObject = child.toObject();
                        delete childObject['#base'];
                        Object.assign(kvData, childObject[Object.keys(childObject)[0]]);
                    }
                });
            }
            let jsonData = JSON.stringify(
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
            // convert all line ending from LF to CRLF
            jsonData = jsonData.replace(/\r\n/g, '\n');

            // change base of file.basename to .json
            const jsonFileName = file.basename.replace(path.extname(file.basename), '.json');
            const jsonFile = new Vinyl({
                base: file.base,
                path: file.path,
                basename: jsonFileName,
                contents: Buffer.from(jsonData),
            });
            next(null, jsonFile);
        } catch (err) {
            return next(new PluginError(PLUGIN_NAME, err), file);
        }
    };

    return through.obj(parseKV);
}
