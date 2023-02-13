//@ts-nocheck
import PluginError from 'plugin-error';
import through2 from 'through2';
import Vinyl from 'vinyl';
import glob from 'glob';
import fs, { existsSync } from 'fs-extra';
import _ from 'lodash';
import Papa from 'papaparse';

const keyvalues = require('keyvalues-node');

const PLUGIN_NAME = `gulp-dotax:kvToLocalization`;

const removeBOM = (content: string) => {
    if (content.charCodeAt(0) === 0xfeff) {
        return content.slice(1);
    }
    return content;
};

export interface KVToLocalizationOptions {
    /**
     * 自定义的前缀
     * @type {Record<string, string>}
     * @memberof KVToLocalizationOptions
     */
    customPrefix?: (key: string, data: any, filePath: string) => string;
    /**
     * 需要输出的自定义后缀
     * @type {Record<string, string[]>}
     * @memberof KVToLocalizationOptions
     */
    customSuffix?: (key: string, data: any, filePath: string) => string[];
    /**
     * 如果有其他需要的自定义的token，在这个方法里面提供
     *
     * @memberof KVToLocalizationOptions
     */
    customToken?: (key: string, data: any, filePath: string) => string[];
    /**
     * 获取了这个kv项的所有token之后，可以使用这个方法来过滤掉不需要的token
     * @memberof KVToLocalizationOptions
     */
    transformTokenName?: (tokens: string[], key: string, data: any, filePath: string) => string[];
    /**
     * 自定义的忽略规则，因为不是所有的kv都需要本地化，比如某些kv是用来记录一些数据的，不需要本地化
     * 这里提供的默认规则是只有有BaseClass的才会被本地化
     * @memberof KVToLocalizationOptions
     */
    customIgnoreRule?: (fileName: string, key: string, data: any, filePath: string) => boolean;
    /**
     * 是否导出技能kv中的modifier
     *
     * @type {boolean}
     * @memberof KVToLocalizationOptions
     */
    exportKVModifiers?: boolean;
    /**
     * 是否导出技能kv中的AbilityValues
     * @type {boolean}
     * @memberof KVToLocalizationOptions
     */
    exportAbilityValues?: boolean;
}

export function pushNewTokensToCSV(csvFilePath: string, tokens: string[]) {
    if (!existsSync(csvFilePath)) {
        fs.writeFileSync(
            csvFilePath,
            `\ufeff${Papa.unparse([{ Tokens: 'addon_game_mode', English: 'YOUR ADDON NAME' }])}`
        );
    }
    let csv = fs.readFileSync(csvFilePath, 'utf-8').toString();
    csv = removeBOM(csv);
    let parsed = Papa.parse(csv, { header: true });
    let data = parsed.data as { [key: string]: string | number; }[];
    let header = parsed.meta.fields;
    let tokenKey = header[0];
    if (tokenKey == null) tokenKey = 'Tokens';
    tokens.forEach((token) => {
        if (data.find((row) => row[tokenKey] == token) == null) {
            data.push({ [tokenKey]: token });
        }
    });
    let csvContent = `\ufeff${Papa.unparse(data)}`;
    try {
        fs.writeFileSync(csvFilePath, csvContent);
    } catch (e) {
        console.log(`文件写入失败，请检查权限或者文件是否被占用，跳过将本地化文本写入csv的过程！`);
    } finally {
        console.log(`成功将新的token写入csv文件！${csvFilePath}`)
    }
}

export function localsToCSV(localsPath: string, csvFilePath: string) {
    let files = glob.sync(localsPath);
    if (!existsSync(csvFilePath)) {
        fs.writeFileSync(
            csvFilePath,
            `\ufeff${Papa.unparse([{ Tokens: 'addon_game_mode', English: 'YOUR ADDON NAME' }])}`
        );
    }
    let csv = fs.readFileSync(csvFilePath, 'utf-8').toString();
    csv = removeBOM(csv);
    let parsed = Papa.parse(csv, { header: true });
    let headers = parsed.meta.fields;
    let tokenKey = headers[0];
    let data = parsed.data as { [key: string]: string | number; }[];
    files.forEach((file) => {
        let content = fs.readFileSync(file, 'utf-8').toString();
        console.log('trying to get tokens from file: ' + file);
        let locals = keyvalues.decode(content);
        let lang = locals.lang.Language;
        headers = _.union(headers, [lang.trim()]);
        let tokens = locals.lang.Tokens;
        if (tokens == null) return;
        Object.keys(tokens).forEach((token) => {
            let row = data.find((row) => row[tokenKey] == token);
            if (row == null) {
                data.push({ [tokenKey]: token, [lang]: tokens[token] });
            } else {
                let index = data.indexOf(row);
                data[index][lang] = tokens[token];
            }
        });
    });
    // 必须保证第一个元素有所有的header
    headers.forEach((h) => (data[0][h] = data[0][h] || ''));
    let csvContent = Papa.unparse(data);
    try {
        fs.writeFileSync(csvFilePath, `\ufeff${csvContent}`);
    } catch (e) {
        console.log(`文件写入失败，请检查权限或者文件是否被占用，跳过将本地化文本写入csv的过程!`);
    }
}

export function pushNewLinesToCSVFile(csvFilePath: string, localData: {
    KeyName: string; // 键名
    [key: string]: string; // 语言 -> 文本
}[]) {
    if (!existsSync(csvFilePath)) {
        fs.writeFileSync(
            csvFilePath,
            `\ufeff${Papa.unparse([{ Tokens: 'addon_game_mode', English: 'YOUR ADDON NAME' }])}`
        );
    }
    let csv = fs.readFileSync(csvFilePath, 'utf-8').toString();
    csv = removeBOM(csv);
    let parsed = Papa.parse(csv, { header: true });
    let headers = parsed.meta.fields;
    let tokenKey = headers[0];
    let data = parsed.data as { [key: string]: string | number; }[];
    localData.forEach(line => {
        const keyName = line.KeyName;
        if (data.find((row) => row[tokenKey] == keyName) == null) {
            data.push({
                [tokenKey]: keyName,
                ..._.omit(line, 'KeyName')
            });
        } else {
            const index = data.findIndex((row) => row[tokenKey] == keyName);
            Object.keys(line).forEach(kk => {
                if (kk != 'KeyName') {
                    data[index][kk] = line[kk];
                }
            })
        }
    })
    // 必须保证第一个元素有所有的header
    headers.forEach((h) => (data[0][h] = data[0][h] || ''));
    let csvContent = Papa.unparse(data);
    try {
        fs.writeFileSync(csvFilePath, `\ufeff${csvContent}`);
    } catch (e) {
        console.log(`文件写入失败，请检查权限或者文件是否被占用，跳过将本地化文本写入csv的过程!`);
    }
}

export function pushNewLocalTokenToCSV(csvFilePath: string, locals: { [key: string]: string; }[]) {
    if (!existsSync(csvFilePath)) {
        fs.writeFileSync(
            csvFilePath,
            `\ufeff${Papa.unparse([{ Tokens: 'addon_game_mode', English: 'YOUR ADDON NAME' }])}`
        );
    }
    let csv = fs.readFileSync(csvFilePath, 'utf8').toString();
    csv = removeBOM(csv);
    let parsed = Papa.parse(csv, { header: true });
    let data = parsed.data as { [key: string]: string | number; }[];
    let header = parsed.meta.fields;
    let tokenKey = header[0];
    if (tokenKey == null) tokenKey = 'Tokens';
    locals.forEach((local) => {
        if (local[tokenKey] != null) {
            if (data.find((row) => row[tokenKey] == local[tokenKey]) == null) {
                data.push(local);
            } else {
                let row = data.find((row) => row[tokenKey] == local[tokenKey]);
                Object.keys(local).forEach((key) => {
                    row[key] = local[key];
                });
                data[data.indexOf(row)] = row;
            }
        }
    });
    data.forEach((d) => {
        Object.entries(d).forEach(([key, value]) => {
            data[0][key] = data[0][key] || '';
        });
    });
    let csvContent = `\ufeff${Papa.unparse(data)}`;
    try {
        fs.writeFileSync(csvFilePath, csvContent);
    } catch (e) {
        console.log(`文件写入失败，请检查权限或者文件是否被占用，跳过将本地化文本写入csv的过程！`);
    }
}

export function updateLocalFilesFromCSV(
    localsPath: string, // 要输出的本地化文件的路径
    existedLocalsPath: string = localsPath, // 其他包含本地化文本的文件夹，包括addon_*.txt，或者其他的以本插件格式保存的csv文件
    languages: string[] = [],
    extraTokens: string[] = [],
    override: boolean = false
) {
    let languageData: Record<string, Record<string, string>> = {};
    // read all addon_*.txt files in the output path
    const addonFiles = glob.sync(`${existedLocalsPath}/addon_*.txt`);
    // if there are extra languages, push them to the languages array
    if (!override) {
        addonFiles.forEach((addonFileName) => {
            let fileContent = fs.readFileSync(addonFileName, 'utf-8').toString();

            // deal with the \n in the file
            const data = keyvalues.decode(fileContent);
            const language = data.lang.Language.trim();
            languages = _.uniq(_.concat(languages, language));
            languageData[language] = data.lang.Tokens || {};
            // escape \n in the tokens
            Object.keys(languageData[language]).forEach((token) => {
                languageData[language][token] = languageData[language][token].replace(/\\n/g, '\n');
            });
        });
    }

    const __existedTokens: string[] = [];
    // 读取addon.csv中已经修改的内容
    const csvFiles = glob.sync(`${existedLocalsPath}/*.csv`);
    csvFiles.forEach((csvFileName) => {
        let csv = fs.readFileSync(csvFileName, 'utf8').toString();
        csv = removeBOM(csv);
        let parsed = Papa.parse(csv, { header: true });
        let data = parsed.data as { [key: string]: string | number; }[];
        let header = parsed.meta.fields;
        let tokenKey = header[0];
        if (tokenKey == null) tokenKey = 'Tokens';
        languages = _.union(languages, header.slice(1));
        data.forEach((row) => {
            let tokenName = row[tokenKey];
            if (tokenName == null) return;
            if (__existedTokens.includes(tokenName)) {
                console.log(`csv检测到重复的：${tokenName}`);
            } else {
                __existedTokens.push(tokenName);
            }
            languages.forEach((language) => {
                let tokenValue = row[language];
                if (tokenValue == null) return;
                languageData[language] = languageData[language] || {};
                languageData[language][tokenName] = tokenValue.toString().replace('\n', '\\n');
            });
        });
    });

    languages.forEach((lang) => {
        if (languageData[lang] == null) {
            languageData[lang] = {};
        }
        // push all the tokens that doesn't exist to the existedLanguageData
        if (extraTokens) {
            extraTokens.forEach((token) => {
                if (languageData[lang][token] == null) {
                    languageData[lang][token] = '';
                }
            });
        }
    });

    // write addon_{language}.txt files to localizationOutputPath
    languages.forEach((lang) => {
        let langD = languageData[lang];
        // convert \n to \\n
        Object.keys(langD).forEach((token) => {
            langD[token] = langD[token].replace(/\n/g, '\\n');
            // if the content is null or empty, delete it
            if (langD[token] === null || langD[token] === '') {
                delete langD[token];
            }
        });
        const data = {
            lang: {
                Language: lang,
                Tokens: langD,
            },
        };
        const fileContent = keyvalues.encode(data);
        const fileName = `addon_${lang.toLocaleLowerCase()}.txt`;
        console.log(`dotax:csvToLoclas is now writing ${fileName}`);
        fs.writeFileSync(`${localsPath}/${fileName}`, fileContent);
    });
}

export function csvToLocals(localsPath: string) {
    return through2.obj(function (file: Vinyl, encoding: any, callback: Function) {
        if (file.isNull()) {
            return callback(null, file);
        }
        // get the dirname of the file
        // it is ok to pass [] to the function, since it will update all languages from .csv header
        updateLocalFilesFromCSV(localsPath);
        callback();
    });
}

export function kvToLocalsCSV(csvPath: string, options?: KVToLocalizationOptions) {
    if (csvPath == null) {
        throw new PluginError(
            PLUGIN_NAME,
            'localizationOutPath is required, you should provide where addon_*.txt and addon.csv files are stored'
        );
    }
    let {
        customPrefix,
        customSuffix,
        customToken,
        customIgnoreRule,
        transformTokenName: transformTokenNames,
        exportAbilityValues = true,
        exportKVModifiers = true,
    } = options || {};

    let localizationTokens: string[] = [];
    let specialKeys: string[] = [];

    function parseKV(file: Vinyl, enc: any, next: Function) {
        if (file.isNull()) {
            return this.queue(file); // pass along
        }

        if (file.isStream()) {
            return this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }

        try {
            const kv = keyvalues.decode(file.contents.toString());
            Object.keys(kv).forEach((key) => {
                const kvContent = kv[key];
                Object.keys(kvContent).forEach((itemKey) => {
                    const itemValue = kvContent[itemKey];
                    const baseClass = itemValue.BaseClass;

                    // 默认的忽略规则，默认只有有BaseClass的才会被本地化
                    if (customIgnoreRule) {
                        if (customIgnoreRule(file.basename, key, itemValue, file.path)) {
                            return;
                        }
                    } else {
                        if (baseClass == null) return; // 只有有base class的才会被parse
                    }

                    let prefix = '';
                    if (customPrefix) prefix = customPrefix(itemKey, itemValue, file.path) || '';
                    if (prefix === '') {
                        // 提供一些默认的前缀
                        if (/[item_|ability_]_[datadriven|lua]/.test(baseClass)) {
                            prefix = 'dota_tooltip_ability_';
                        }
                    }

                    let suffix = [''];
                    if (customSuffix) {
                        let customSuffixValue = customSuffix(itemKey, itemValue, file.path);
                        if (customSuffixValue) {
                            suffix = _.uniq(_.concat(suffix, customSuffixValue));
                        }
                    }
                    if (suffix.length == 1 && suffix[0] === '') {
                        // 提供一些默认的后缀
                        if (/[item_|ability_]_[datadriven|lua]/.test(baseClass)) {
                            suffix = _.uniq(_.concat(suffix, '_description'));

                            // 技能的AbilityValues和AbilitySpecials的处理
                            if (exportAbilityValues) {
                                let abilityValues = itemValue.AbilityValues;
                                if (abilityValues) {
                                    suffix = _.uniq(
                                        _.concat(
                                            suffix,
                                            Object.keys(abilityValues).map((s) => `_${s}`)
                                        )
                                    );
                                }
                                let AbilitySpecial = itemValue.AbilitySpecial;
                                if (AbilitySpecial) {
                                    Object.keys(AbilitySpecial).forEach((data) => {
                                        const ss = AbilitySpecial[data];
                                        Object.keys(ss).forEach((s) => {
                                            if (!['var_type', 'LinkedSpecialBonus'].includes(s)) {
                                                suffix = _.uniq(_.concat(suffix, `_${s}`));
                                                specialKeys = _.uniq(
                                                    _.concat(specialKeys, `"_${s}"`)
                                                );
                                            }
                                        });
                                    });
                                }
                            }
                        }
                    }

                    let tokens = suffix.map((s) => `${prefix}${itemKey}${s}`);

                    if (customToken != null) {
                        let extraToekens = customToken(itemKey, itemValue, file.path);
                        tokens = _.uniq(_.concat(tokens, extraToekens));
                    }

                    // KV Modifiers的处理
                    if (exportKVModifiers) {
                        let modifiers = itemValue.Modifiers;
                        if (modifiers) {
                            Object.keys(modifiers).forEach((modifierName) => {
                                tokens = _.uniq(
                                    _.concat(
                                        tokens,
                                        `dota_tooltip_${modifierName}`,
                                        `dota_tooltip_${modifierName}_description`
                                    )
                                );
                            });
                        }
                    }

                    if (transformTokenNames != null) {
                        tokens = transformTokenNames(tokens, itemKey, itemValue, file.path);
                    }

                    localizationTokens = _.uniq(_.concat(localizationTokens, tokens));
                });
            });
            next();
        } catch (err) {
            return this.emit('error', new PluginError(PLUGIN_NAME, err));
        }
    }

    function endStream() {
        pushNewTokensToCSV(csvPath, localizationTokens);
        this.emit('end');
    }
    return through2.obj(parseKV, endStream);
}
