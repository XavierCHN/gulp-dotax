//@ts-nocheck
import PluginError from 'plugin-error';
import through from 'through2';
import Vinyl from 'vinyl';
import path from 'path';
import { KeyValues } from 'easy-keyvalues';
const cli = require('cli-color');

const PLUGIN_NAME = `gulp-dotax:kvToJS`;

export interface KVToJSOptions {
    // 是否将含有 ArraySeperator 的字符串转换为 array
    AutoConvertToArray?: boolean;
    /** 数组的分隔符的政策表达式 目前是 竖杠 | 和 # 号 （ /[\|#]/ ）*/
    ArraySeperator?: string;
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
            const kv = await KeyValues.Load(kvFileName);
            let rawData = kv.toObject();

            // 根据Valve的kv文件规则，这里需要丢弃根节点并且把所有的子节点合并
            let kvData = {};
            for (const rootKey in rawData) {
                if (rawData.hasOwnProperty(rootKey)) {
                    Object.assign(kvData, rawData[rootKey]);
                }
            }

            let jsonData = JSON.stringify(
                kvData,
                (key, value) => {
                    // 如果是空字符串，那么直接输出空字符串
                    // 原因是 Number('') = 0，fuck javascript
                    if (value === '') {
                        return '';
                    }

                    // 如果是数字，直接输出数字
                    if (typeof value === 'string' && !isNaN(Number(value))) {
                        return Number(value);
                    }
                    //  如果AutoConvertToArray为true的话，将使用 '|' 或者 '#' ( 取决于 ArraySeperator ) 分割的字符串，那么直接输出成数组
                    //
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
            console.log('文件 ' + cli.redBright(file.path) + ' 解析失败，可能存在语法错误！')
            console.log(cli.redBright(`[kvToJS] ${err}`))
            return next(new PluginError(PLUGIN_NAME, err), file);
        }
    };

    return through.obj(parseKV);
}
