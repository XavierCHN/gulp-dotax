import PluginError from 'plugin-error';
import through2 from 'through2';
import Vinyl from 'vinyl';
import glob from 'glob';
import fs from 'fs-extra';
import _ from 'lodash';
import Papa from 'papaparse';
import path from 'path';

const keyvalues = require('keyvalues-node');

const PLUGIN_NAME = `gulp-dotax:kvToLocalization`;

export interface KVToLocalizationOptions {
    /**
     * 自定义的前缀
     * @type {Record<string, string>}
     * @memberof KVToLocalizationOptions
     */
    customPrefix?: (key: string, data: any) => string;
    /**
     * 需要输出的自定义后缀
     * @type {Record<string, string[]>}
     * @memberof KVToLocalizationOptions
     */
    customSuffix?: (key: string, data: any) => string[];
    /**
     * 如果有其他需要的自定义的token，在这个方法里面提供
     *
     * @memberof KVToLocalizationOptions
     */
    customToken?: (key: string, data: any) => string[];
    /**
     * 获取了这个kv项的所有token之后，可以使用这个方法来过滤掉不需要的token
     * @memberof KVToLocalizationOptions
     */
    transformTokenName?: (tokens: string[], key: string, data: any) => string[];
    /**
     * 自定义的忽略规则，因为不是所有的kv都需要本地化，比如某些kv是用来记录一些数据的，不需要本地化
     * 这里提供的默认规则是只有有BaseClass的才会被本地化
     * @memberof KVToLocalizationOptions
     */
    customIgnoreRule?: (fileName: string, key: string, data: any) => boolean;
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
    let files = glob.sync(csvFilePath);
    files.forEach((file) => {
        let csv = fs.readFileSync(file, 'utf8');
        let parsed = Papa.parse(csv, { header: true });
        let data = parsed.data as { [key: string]: string | number }[];
        let header = parsed.meta.fields;
        let tokenKey = header[0];
        if (tokenKey == null) tokenKey = 'Tokens';
        tokens.forEach((token) => {
            if (data.find((row) => row[tokenKey] == token) == null) {
                data.push({ [tokenKey]: token });
            }
        });
        let csvContent = Papa.unparse(data);
        fs.writeFileSync(file, csvContent);
    });
}

export function localsToCSV(localsPath: string, csvFilePath: string) {
    let files = glob.sync(localsPath);
    let csv = fs.readFileSync(csvFilePath, 'utf8');
    let parsed = Papa.parse(csv, { header: true });
    let headers = parsed.meta.fields;
    let tokenKey = headers[0];
    let data = parsed.data as { [key: string]: string | number }[];
    files.forEach((file) => {
        let content = fs.readFileSync(file, 'utf8');
        let locals = keyvalues.parse(content);
        let lang = locals.lang.Language;
        let tokens = locals.lang.Tokens;
        if (tokens == null) return;
        Object.keys(tokens).forEach((token) => {
            if (data.find((row) => row[tokenKey] == token) == null) {
                data.push({ [tokenKey]: token, [lang]: tokens[token] });
            } else {
                let row = data.find((row) => row[tokenKey] == token);
                row[lang] = tokens[token];
            }
        });
    });
    let csvContent = Papa.unparse(data);
    fs.writeFileSync(csvFilePath, csvContent);
}

export function pushNewLocalTokenToCSV(csvFilePath: string, locals: { [key: string]: string }[]) {
    let files = glob.sync(csvFilePath);
    files.forEach((file) => {
        let csv = fs.readFileSync(file, 'utf8');
        let parsed = Papa.parse(csv, { header: true });
        let data = parsed.data as { [key: string]: string | number }[];
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
                }
            }
        });
        let csvContent = Papa.unparse(data);
        fs.writeFileSync(file, csvContent);
    });
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

    // 读取addon.csv中已经修改的内容
    const csvFiles = glob.sync(`${existedLocalsPath}/*.csv`);
    csvFiles.forEach((csvFileName) => {
        let csv = fs.readFileSync(csvFileName, 'utf8');
        let parsed = Papa.parse(csv, { header: true });
        let data = parsed.data as { [key: string]: string | number }[];
        let header = parsed.meta.fields;
        let tokenKey = header[0];
        if (tokenKey == null) tokenKey = 'Tokens';
        languages = _.union(languages, header.slice(1));
        data.forEach((row) => {
            let tokenName = row[tokenKey];
            if (tokenName == null) return;
            languages.forEach((language) => {
                let tokenValue = row[language];
                if (tokenValue == null) return;
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
                        if (customIgnoreRule(file.basename, key, itemValue)) {
                            return;
                        }
                    } else {
                        if (baseClass == null) return; // 只有有base class的才会被parse
                    }

                    let prefix = '';
                    if (customPrefix) prefix = customPrefix(itemKey, itemValue) || '';
                    if (prefix === '') {
                        // 提供一些默认的前缀
                        if (/[item_|ability_]_[datadriven|lua]/.test(baseClass)) {
                            prefix = 'dota_tooltip_ability_';
                        }
                    }

                    let suffix = [''];
                    if (customSuffix) {
                        let customSuffixValue = customSuffix(itemKey, itemValue);
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
                                let abilitySpeicals = itemValue.AbilitySpecials;
                                if (abilitySpeicals) {
                                    Object.keys(abilitySpeicals).forEach((data) => {
                                        const ss = abilitySpeicals[data];
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
                        let extraToekens = customToken(itemKey, itemValue);
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
                                        `dota_tooltip_modifier_${modifierName}`,
                                        `dota_tooltip_modifier_${modifierName}_description`
                                    )
                                );
                            });
                        }
                    }

                    if (transformTokenNames != null) {
                        tokens = transformTokenNames(tokens, itemKey, itemValue);
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
