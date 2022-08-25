//@ts-nocheck
// 将一个sheet转换为一个kv表的gulp插件
import through2 from 'through2';
import xlsx from 'node-xlsx';
import Vinyl from 'vinyl';
import { pinyin, customPinyin } from 'pinyin-pro';

const PLUGIN_NAME = 'gulp-dotax:sheetToKV';

export interface SheetToKVOptions {
    sheetsIgnore?: string;
    verbose?: boolean;
    chineseToPinyin?: boolean;
    customPinyins?: Record<string, string>;
    indent?: string;
    autoSimpleKV?: boolean;
    kvFileExt?: string;
}

export function sheetToKV(options: SheetToKVOptions) {
    const {
        customPinyins = {},
        sheetsIgnore = /^\s*$/,
        verbose = false,
        autoSimpleKV = true,
        kvFileExt = '.txt',
        chineseToPinyin = true,
        indent = '    '
    } = options;

    customPinyin(customPinyins);

    function convert_chinese_to_pinyin(da: string) {
        if (da == null || da.match == null) return da;
        let s = da;
        let reg = /[\u4e00-\u9fa5]+/g;
        let match = s.match(reg);
        if (match != null) {
            match.forEach((m) => {
                s = s.replace(m, pinyin(m, { toneType: 'none', type: 'array' }).join('_')).replace('ü', 'v');
            });
        }
        return s;
    }

    function deal_with_kv_value(value: string) {
        if (!isNaN(parseFloat(value))) {
            let number = parseFloat(value);
            // if this is not an integer, max 4 digits after dot
            if (number % 1 !== 0) {
                value = number.toFixed(4);
            }
        }

        if (value == undefined) return '';

        return value;
    }

    function convert_row_to_kv(row: string[], key_row: string[]): string {
        // 第一列为主键
        let main_key = row[0];

        let attachWearablesBlock = false;
        let abilityValuesBlock = false;
        let indentLevel = 1;

        return (
            key_row
                .map((key, i) => {
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

                    if (
                        attachWearablesBlock &&
                        key !== `AttachWearables[{]` &&
                        cell != `` &&
                        cell != undefined
                    ) {
                        return `${indentStr}"${key}" { "ItemDef" "${cell}" }`;
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

                    return `${indentStr}"${key}" "${deal_with_kv_value(cell)}"`;
                })
                .filter((row) => row != null)
                .map((s) => (chineseToPinyin ? convert_chinese_to_pinyin(s) : s))
                .join('\n') +
            '\n' +
            `${indent}}`
        );
    }

    function convert(this: any, file: Vinyl, enc: any, callback: Function) {
        if (file.isNull()) return callback(null, file);
        if (file.isStream()) return callback(new Error(`${PLUGIN_NAME} Streaming not supported`));
        if (file.basename.startsWith(`~$`)) {
            console.log(`${PLUGIN_NAME} Ignore empty kv file ${file.basename}`);
            return;
        }
        // ignore files that are not xlsx,xls
        if (!file.basename.endsWith(`.xlsx`) && !file.basename.endsWith(`.xls`)) {
            console.log(`${PLUGIN_NAME} ignore non-xlsx file ${file.basename}`);
            return;
        }

        if (file.isBuffer()) {
            console.log(`${PLUGIN_NAME} Converting ${file.path} to kv`);
            const workbook = xlsx.parse(file.contents);
            workbook.forEach((sheet) => {
                let sheet_name = sheet.name;


                if (new RegExp(sheetsIgnore).test(sheet_name)) {
                    console.log(`${PLUGIN_NAME} Ignoring sheet ${sheet_name} in workbook ${file.path}`);
                    return;
                }

                // 如果名称中包含中文，那么弹出一个提示，说可以把中文名称的表格忽略
                if (sheet_name.match(/[\u4e00-\u9fa5]+/g)) {
                    console.log(`${PLUGIN_NAME} Warning: ${sheet_name} 包含中文，将其转换为英文输出`);
                    console.log(`如果你不想输出这个表，请将其名称加入sheetsIgnore中`);
                    sheet_name = convert_chinese_to_pinyin(sheet_name);
                }

                const sheet_data = sheet.data as string[][];
                const sheet_data_length = sheet_data.length;
                if (sheet_data_length === 0) {
                    if (verbose) {
                        console.log(`${PLUGIN_NAME} Ignoring empty sheet ${sheet_name} in workbook ${file.path}`);
                    }
                    return;
                }

                let key_row = sheet_data[1].map(i => i.toString()); // 第二行为key行
                const kv_data = sheet_data.slice(2);
                const kv_data_length = kv_data.length;
                if (kv_data_length === 0) {
                    if (verbose) {
                        console.log(`${PLUGIN_NAME} Ignoring no data sheet ${sheet_name} in workbook ${file.path}`);
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

                const out_put = `
// this file is auto-generated by Xavier's sheet_to_kv from
// ${file.basename} ${sheet_name}
"XLSXContent"
{
${kv_data_str}
}
`;

                const kvBaseName = `${sheet_name}${kvFileExt}`;

                console.log(`${PLUGIN_NAME} Writing sheet content to ${kvBaseName}`);
                const kv_file = new Vinyl({
                    base: file.base,
                    path: file.path,
                    basename: kvBaseName,
                    contents: Buffer.from(out_put),
                });

                this.push(kv_file);
            });
        }
        callback();
    }
    return through2.obj(convert);
}
