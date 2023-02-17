//@ts-nocheck
// 将一个sheet转换为一个kv表的gulp插件
import through2 from 'through2';
import xlsx from 'node-xlsx';
import Vinyl from 'vinyl';
import path from 'path';
import { pinyin, customPinyin } from 'pinyin-pro';
import { pushNewLinesToCSVFile } from './kvToLocalization';

const cli = require('cli-color');

const PLUGIN_NAME = 'gulp-dotax:sheetToKV';

export interface SheetToKVOptions {
    /** 需要略过的表格的正则表达式 */
    sheetsIgnore?: string;
    /** 是否启用啰嗦模式 */
    verbose?: boolean;
    /** 是否将汉语转换为拼音 */
    chineseToPinyin?: boolean;
    /** 自定义的拼音 */
    customPinyins?: Record<string, string>;
    /** KV的缩进方式，默认为四个空格 */
    indent?: string;
    /** 是否将只有两列的表输出为简单键值对 */
    autoSimpleKV?: boolean;
    /** KV文件的扩展名，默认为 .txt */
    kvFileExt?: string;
    /** 强制输出空格的单元格内容（如果单元格内容为此字符串，输出为 "key" "" */
    forceEmptyToken?: string;
    /** 中文转换为英文的映射列表，这些中文将会被转换为对应的英文而非拼音 */
    aliasList?: Record<string, string>;
    /**
     * 输出本地化文本到 addon.csv 文件，如果要启动，需要配置 addon.csv所在路径
     * 使用方法：
     *   将 sheet 的第二行写特定的key，例如 `#Loc{}_Lore`，{} 的内容将会被替换为第一列的主键
     **/
    addonCSVPath?: string;
    /** addon.csv输出的默认语言，默认为SChinese */
    addonCSVDefaultLang?: string;
}

export function sheetToKV(options: SheetToKVOptions) {
    const {
        customPinyins = {},
        sheetsIgnore = /^\s*$/,
        verbose = false,
        forceEmptyToken = `__empty__`,
        autoSimpleKV = true,
        kvFileExt = '.txt',
        chineseToPinyin = true,
        indent = '    ',
        aliasList = {},
        addonCSVPath = null,
        addonCSVDefaultLang = `SChinese`,
    } = options;

    customPinyin(customPinyins);

    const aliasKeys = Object.keys(aliasList)
        // 按从长到短排序，这样可以保证别名的替换不会出现问题
        .sort((a, b) => b.length - a.length);

    // 本地化token列表
    let locTokens: { [key: string]: string }[] = [];

    function convert_chinese_to_pinyin(da: string) {
        if (da == null || da.match == null) return da;

        // 如果da中包含别名，那么先将别名替换掉（可能是中文替换中文，或者中文替换成英文等等）
        aliasKeys.forEach((aliasKey) => {
            da = da.replace(aliasKey, aliasList[aliasKey]);
        });

        let s = da;
        let reg = /[\u4e00-\u9fa5]+/g;
        let match = s.match(reg);
        if (match != null) {
            match.forEach((m) => {
                s = s
                    .replace(m, pinyin(m, { toneType: 'none', type: 'array' }).join('_'))
                    .replace('ü', 'v');
            });
        }
        return s;
    }

    function deal_with_kv_value(value: string): string {
        if (/^[0-9]+.?[0-9]*$/.test(value)) {
            let number = parseFloat(value);
            // if this is not an integer, max 4 digits after dot
            if (number % 1 !== 0) {
                value = number.toFixed(4);
            }
        }

        if (value == undefined) return '';

        if (forceEmptyToken == value) return '';

        return value;
    }

    function convert_row_to_kv(row: string[], key_row: string[]): string {
        function checkSpace(key: string) {
            if (typeof key == 'string' && key.trim != null && key != key.trim()) {
                console.warn(cli.red(`${main_key} 键值对中的 ${key} 前后有空格，请检查！`));
            }
        }

        // 第一列为主键
        let main_key = row[0];
        checkSpace(main_key);

        let attachWearablesBlock = false;
        let abilityValuesBlock = false;
        let varIndex = 0;
        let indentLevel = 1;

        return (
            key_row
                .map((key, i) => {
                    // 判断key前后是否有空格，如果有，那么输出一个警告
                    checkSpace(key);

                    // 跳过没有的key
                    if (key == null || key == undefined || key == ``) return;

                    // 缩进
                    let indentStr = (indent || `\t`).repeat(indentLevel);

                    // 第一列为主键
                    if (i == 0) {
                        indentLevel++;
                        return `${indentStr}"${main_key}" {`;
                    }

                    // 处理饰品的特殊键值对
                    if (key == `AttachWearables[{]`) attachWearablesBlock = true;
                    if (attachWearablesBlock && key == '[}]') attachWearablesBlock = false;

                    // 处理技能的特殊键值对，现在只需要处理顶部key作为通用key，value为数组的情况
                    if (key == `AbilityValues[{]`) abilityValuesBlock = true;
                    if (abilityValuesBlock && key == '[}]') abilityValuesBlock = false;

                    // 获取该单元格的值
                    let cell: string = row[i];
                    checkSpace(cell);

                    if (
                        attachWearablesBlock &&
                        key !== `AttachWearables[{]` &&
                        cell != `` &&
                        cell != undefined
                    ) {
                        return `${indentStr}"${key}" { "ItemDef" "${cell}" }`;
                    }

                    // 处理写excel文件中的本地化文本
                    if (key.startsWith(`#Loc`)) {
                        let locKey = key.replace(`#Loc`, ``).replace(`{}`, main_key);
                        // 保存对应的本地化tokens
                        locTokens.push({
                            //TODO, 将Tokens修改为 addon.csv 第一行的第一个元素？
                            KeyName: locKey,
                            [addonCSVDefaultLang]: cell,
                        });
                        return; // 不输出到kv文件
                    }

                    if (abilityValuesBlock && key !== `AbilityValues[{]`) {
                        if (cell == `` || cell == undefined) return;
                        let values_key = '';
                        // 如果key不是数字，那么则作为key
                        if (isNaN(Number(key))) {
                            values_key = key;
                        }
                        let datas = cell.toString().split(' ');
                        if (isNaN(Number(datas[0]))) {
                            values_key = datas[0];
                            cell = cell.replace(`${datas[0]} `, '');
                        }
                        if (values_key == '') {
                            values_key = `unknown_var_${varIndex}`;
                            varIndex++;
                        }

                        // 如果输出中包含 { } 等，那么直接输出value，不加双引号
                        if (cell != null && cell.toString().trimStart().startsWith('{')) {
                            return `${indentStr}"${values_key}" ${cell}`;
                        }

                        return `${indentStr}"${values_key}" "${cell}"`;
                    }

                    if (key.includes('[{]')) {
                        indentLevel++;
                        return `${indentStr}"${key.replace(`[{]`, ``)}" {`;
                    }
                    if (key.includes('[}]')) {
                        indentLevel--;
                        indentStr = (indent || `\t`).repeat(indentLevel);
                        return `${indentStr}}`;
                    }

                    if ((cell === `` || cell === undefined) && !/^Ability[0-9]{1,2}/.test(key)) {
                        return;
                    }

                    const output_value = deal_with_kv_value(cell);

                    // 如果输出中包含 { } 等，那么直接输出value，不加双引号
                    if (
                        output_value != null &&
                        output_value.toString().trimStart().startsWith('{')
                    ) {
                        return `${indentStr}"${key}" ${output_value}`;
                    }

                    return `${indentStr}"${key}" "${deal_with_kv_value(cell)}"`;
                })
                .filter((row) => row != null)
                .map((s) => (chineseToPinyin ? convert_chinese_to_pinyin(s) : s))
                .join('\n') +
            '\n' +
            `${indent}}`
        );
    }

    let genratedFiles: string[] = [];
    function convert(this: any, file: Vinyl, enc: any, next: Function) {
        if (file.isNull()) return next(null, file);
        if (file.isStream()) return next(new Error(`${PLUGIN_NAME} Streaming not supported`));
        if (file.basename.startsWith(`~$`)) {
            console.log(`${PLUGIN_NAME} Ignore empty kv file ${file.basename}`);
            return next();
        }
        // ignore files that are not xlsx,xls
        if (!file.basename.endsWith(`.xlsx`) && !file.basename.endsWith(`.xls`)) {
            console.log(cli.green(`${PLUGIN_NAME} ignore non-xlsx file ${file.basename}`));
            return next();
        }

        if (file.isBuffer()) {
            console.log(`${PLUGIN_NAME} Converting ${file.path} to kv`);
            const workbook = xlsx.parse(file.contents);
            workbook.forEach((sheet) => {
                let sheet_name = sheet.name;

                if (new RegExp(sheetsIgnore).test(sheet_name)) {
                    console.log(
                        `${PLUGIN_NAME} Ignoring sheet ${sheet_name} in workbook ${file.path}`
                    );
                    return;
                }

                // 如果名称中包含中文，那么弹出一个提示，说可以把中文名称的表格忽略
                if (sheet_name.match(/[\u4e00-\u9fa5]+/g)) {
                    console.log(
                        cli.yellow(
                            `${PLUGIN_NAME} Warning: ${sheet_name} 包含中文，将其转换为英文输出`
                        )
                    );
                    console.log(cli.yellow(`如果你不想输出这个表，请将其名称加入sheetsIgnore中`));
                    sheet_name = convert_chinese_to_pinyin(sheet_name);
                }

                const sheet_data = sheet.data as string[][];
                const sheet_data_length = sheet_data.length;
                if (sheet_data_length === 0) {
                    if (verbose) {
                        console.log(
                            cli.red(
                                `${PLUGIN_NAME} Ignoring empty sheet ${sheet_name} in workbook ${file.path}`
                            )
                        );
                    }
                    return;
                }

                let key_row = sheet_data[1].map((i) => i.toString()); // 第二行为key行
                const kv_data = sheet_data.slice(2);
                const kv_data_length = kv_data.length;
                if (kv_data_length === 0) {
                    if (verbose) {
                        console.log(
                            cli.red(
                                `${PLUGIN_NAME} Ignoring no data sheet ${sheet_name} in workbook ${file.path}`
                            )
                        );
                    }
                    return;
                }

                let kv_data_str = '';

                if (key_row.length == 2 && autoSimpleKV) {
                    const kv_data_simple = kv_data.map((row) => {
                        return `\t"${row[0]}" "${row[1]}"`;
                    });
                    kv_data_str = `${kv_data_simple.join('\n')}`;
                } else {
                    const kv_data_complex = kv_data.map((row) => {
                        if (row[0] == `` || row[0] == null) return;
                        return convert_row_to_kv(row, key_row);
                    });
                    kv_data_str = `${kv_data_complex.join('\n')}`;
                }

                let out_put = `
// this file is auto-generated by Xavier's sheet_to_kv from
// ${file.basename} ${sheet_name}
// SourceCode: https://github.com/XavierCHN/gulp-dotax/blob/master/src/sheetToKV.ts
// Template: https://github.com/XavierCHN/x-template
"XLSXContent"
{
${kv_data_str}
}
`;

                const kvBaseName = `${sheet_name}${kvFileExt}`;

                console.log(`${PLUGIN_NAME} Writing sheet content to ${kvBaseName}`);

                // if file already generated, throw an error
                let fileDirectory = file.dirname;
                let generaetdFileFullname = path.join(fileDirectory, kvBaseName);
                if (genratedFiles.includes(generaetdFileFullname)) {
                    throw new Error(`[ERROR] KVFile ${generaetdFileFullname} is duplicated!`);
                }
                genratedFiles.push(generaetdFileFullname);

                // convert all line ending from CRLF TO LF
                out_put.replace(/\r\n/g, '\n');

                const kv_file = new Vinyl({
                    base: file.base,
                    path: file.path,
                    basename: kvBaseName,
                    contents: Buffer.from(out_put),
                });

                this.push(kv_file);
            });
        }
        next();
    }

    function endStream() {
        if (addonCSVPath != null) {
            pushNewLinesToCSVFile(addonCSVPath, locTokens);
        }
        this.emit('end');
    }

    return through2.obj(convert, endStream);
}
