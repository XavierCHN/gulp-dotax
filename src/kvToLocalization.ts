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

const Languages = ['SChinese', 'English'];

export interface KVToLocalizationOptions {
    /**
     * 输出本地化文件的路径，这个插件会读取该路径中的addon_*.txt文件，如果已经有写好的本地化，那么会直接使用
     * @type {string}
     * @memberof KVToLocalizationOptions
     */
    localizationOutPath: string;
    /**
     * 需要输出的语言，默认为 ["SChinese", "English"]
     * @type {string[]}
     * @memberof KVToLocalizationOptions
     */
    languages?: string[];
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

export function updateLocalFilesFromCSV(
    localizationOutPath: string,
    languages: string[],
    extraTokens?: string[]
) {
    let languageData: Record<string, Record<string, string>> = {};
    // read all addon_*.txt files in the output path
    const addonFiles = glob.sync(`${localizationOutPath}/*.txt`);
    // if there are extra languages, push them to the languages array
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

    // 读取addon.csv中已经修改的内容
    const csvFileName = `${localizationOutPath}/addon.csv`;
    if (fs.existsSync(csvFileName)) {
        const data = Papa.parse(fs.readFileSync(csvFileName, 'utf-8'));
        if (data.errors.length === 0) {
            let content = data.data as string[][];
            let csvHeader = content[0];
            languages = _.uniq(_.concat(languages, csvHeader.slice(1)));
            let csvContent = content.slice(1);
            csvContent.forEach((row) => {
                const tokenName = row[0];
                csvHeader.forEach((lang, i) => {
                    // ignore the first column, it stores the token
                    if (lang && i != 0) {
                        const value = row[i];
                        if (value && value.trim() !== '') {
                            languageData[lang] = languageData[lang] || {};
                            languageData[lang][tokenName] = value;
                        }
                    }
                });
            });
        }
    }

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
        });
        const data = {
            lang: {
                Language: lang,
                Tokens: langD,
            },
        };
        const fileContent = keyvalues.encode(data);
        const fileName = `addon_${lang.toLocaleLowerCase()}.txt`;
        fs.writeFileSync(`${localizationOutPath}/${fileName}`, fileContent);
    });

    // write addon.csv file to the stream
    let csvData: Record<string, string>[] = [];
    // convert language data to csv data
    // csv data format:
    // [{Tokens: token, SChinese: value, English: value, ...}]
    Object.keys(languageData).forEach((lang) => {
        const langD = languageData[lang];
        Object.keys(langD).forEach((token) => {
            let tokenItem = csvData.find((item) => item.Tokens === token);
            if (tokenItem == null) {
                tokenItem = {
                    Tokens: token,
                };
            }
            if (token == `dota_tooltip_ability_chess_ability_pao_xiao`) {
                console.log(lang, tokenItem);
            }
            tokenItem[lang] = langD[token];
            if (token == `dota_tooltip_ability_chess_ability_pao_xiao`) {
                console.log('after', tokenItem);
            }
            csvData.push(tokenItem);
        });
    });

    // 需要保障第一个元素有所有的lang，否则csv文件会出错
    languages.forEach((lang) => {
        csvData[0][lang] = csvData[0][lang] || '';
    });

    const stringCsvContent = Papa.unparse(csvData);

    // write to addon.csv in localizationOutputPath
    fs.writeFileSync(`${localizationOutPath}/addon.csv`, `\ufeff${stringCsvContent}`, 'utf-8');
}

export function csvToLocals() {
    return through2.obj(function (file: Vinyl, encoding: any, callback: Function) {
        if (file.isNull()) {
            return callback(null, file);
        }
        // get the dirname of the file
        const dirname = path.dirname(file.path);
        // it is ok to pass [] to the function, since it will update all languages from .csv header
        const languages: string[] = [];
        updateLocalFilesFromCSV(dirname, languages);
    });
}

export function kvToLocalization(localizationOutPath: string, options?: KVToLocalizationOptions) {
    if (localizationOutPath == null) {
        throw new PluginError(
            PLUGIN_NAME,
            'localizationOutPath is required, you should provide where addon_*.txt and addon.csv files are stored'
        );
    }
    let {
        languages = Languages,
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
        updateLocalFilesFromCSV(localizationOutPath, languages, localizationTokens);
        this.emit('end');
    }
    return through2.obj(parseKV, endStream);
}
