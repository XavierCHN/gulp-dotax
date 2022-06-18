import PluginError from "plugin-error";
import through2 from "through2";
import Vinyl from "vinyl";
import glob from "glob";
import fs from "fs-extra";
import _ from "lodash";
import { stringify } from "csv-stringify/sync";

const { readCSVSync } = require("read-csv-sync");
const keyvalues = require("keyvalues-node");

const PLUGIN_NAME = `gulp-dotax:kvToLocalization`;

const Languages = ["SChinese", "English"];

export interface KVToLocalizationOptions {
    /**
     * 输出本地化文件的路径，这个插件会读取该路径中的addon_*.txt文件，如果已经有写好的本地化，那么会直接使用
     * @type {string}
     * @memberof KVToLocalizationOptions
     */
    localizationOutPath: string;
    /**
     * 输出csv文件的路径
     * @type {boolean}
     * @memberof KVToLocalizationOptions
     */
    csvOutPath?: string;
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
     * 啰嗦模式
     * @type {boolean}
     * @memberof KVToLocalizationOptions
     */
    verbose?: boolean;
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

export function kvToLocalization(localizationOutPath: string, options?: KVToLocalizationOptions) {
    if (localizationOutPath == null) {
        throw new PluginError(PLUGIN_NAME, "localizationOutPath is required, you should provide where addon_*.txt files are stored");
    }
    let {
        csvOutPath,
        languages = Languages,
        customPrefix,
        customSuffix,
        customToken,
        customIgnoreRule,
        transformTokenName: transformTokenNames,
        exportAbilityValues = true,
        exportKVModifiers = true,
        verbose,
    } = options ?? {};

    let localizationTokens: string[] = [];
    if (csvOutPath === undefined) csvOutPath = localizationOutPath;
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
            Object.keys(kv).forEach(key => {
                const kvContent = kv[key];
                Object.keys(kvContent).forEach(itemKey => {
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

                    let prefix = "";
                    if (customPrefix) prefix = customPrefix(itemKey, itemValue) ?? "";
                    else {
                        // 提供一些默认的前缀
                        if (/[item_|ability_]_[datadriven|lua]/.test(baseClass)) {
                            prefix = "dota_tooltip_ability_";
                        }
                    }

                    let suffix = [""];
                    if (customSuffix) {
                        let customSuffixValue = customSuffix(itemKey, itemValue);
                        if (customSuffixValue) {
                            suffix = _.uniq(_.concat(suffix, customSuffixValue));
                        }
                    } else {
                        // 提供一些默认的后缀
                        if (/[item_|ability_]_[datadriven|lua]/.test(baseClass)) {
                            suffix = _.uniq(_.concat(suffix, "_description"));

                            // 技能的AbilityValues和AbilitySpecials的处理
                            if (exportAbilityValues) {
                                let abilityValues = itemValue.AbilityValues;
                                if (abilityValues) {
                                    suffix = _.uniq(_.concat(suffix, Object.keys(abilityValues).map(s => `_${s}`)));
                                }
                                let abilitySpeicals = itemValue.AbilitySpecials;
                                if (abilitySpeicals) {
                                    Object.keys(abilitySpeicals).forEach(data => {
                                        const ss = abilitySpeicals[data];
                                        Object.keys(ss).forEach(s => {
                                            if (
                                                ![
                                                    "var_type",
                                                    "LinkedSpecialBonus",
                                                ].includes(s)
                                            ) {
                                                suffix = _.uniq(_.concat(suffix, `_${s}`));
                                                specialKeys = _.uniq(_.concat(specialKeys, `"_${s}"`));
                                            }
                                        });
                                    });
                                }
                            }
                        }
                    }

                    let tokens = suffix.map(s => `${prefix}${itemKey}${s}`);

                    if (customToken != null) {
                        let extraToekens = customToken(itemKey, itemValue);
                        tokens = _.uniq(_.concat(tokens, extraToekens));
                    }

                    // KV Modifiers的处理
                    if (exportKVModifiers) {
                        let modifiers = itemValue.Modifiers;
                        if (modifiers) {
                            Object.keys(modifiers).forEach(modifierName => {
                                tokens = _.uniq(_.concat(tokens,
                                    `dota_tooltip_modifier_${modifierName}`,
                                    `dota_tooltip_modifier_${modifierName}_description`,
                                ));
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
        // try {
        let languageData: Record<string, Record<string, string>> = {};
        // read all addon_*.txt files in the output path
        const addonFiles = glob.sync(`${localizationOutPath}/*.txt`);
        // if there are extra languages, push them to the languages array
        addonFiles.forEach(addonFileName => {
            const data = keyvalues.decode(fs.readFileSync(addonFileName, 'utf-8').toString());
            const language = data?.lang?.Language;
            languages = _.uniq(_.concat(languages, language));
            languageData[language] = data.lang.Tokens;
        });

        // 读取addon.csv中已经修改的内容
        const csvFileName = `${csvOutPath}/addon.csv`;
        if (fs.existsSync(csvFileName)) {
            const data = readCSVSync(csvFileName) as Record<string, string>[];
            data.forEach(row => {
                let token = row.Tokens;
                Object.keys(row).forEach(key => {
                    if (key == "Tokens") {
                    } else {
                        let value = row[key];
                        languages = _.uniq(_.concat(languages, key));
                        if (value != null && value != undefined && value != "") {
                            if (languageData[key][token] !== null && languageData[key][token] !== undefined && languageData[key][token] != "") {
                                if (verbose) console.log(`addon_${key.toLowerCase()}.txt ${token} ${key} ${languageData[key][token]} is overwritten by ${value}`);
                            }
                            languageData[key][token] = value;
                        }
                    }
                });
            });
        }

        languages.forEach(lang => {
            if (languageData[lang] == null) {
                languageData[lang] = {};
            }
            // push all the tokens that doesn't exist in the existedLanguageData to the existedLanguageData
            localizationTokens.forEach(token => {
                if (languageData[lang][token] == null) {
                    languageData[lang][token] = "";
                }
            });
        });

        // write addon_{language}.txt files to the stream
        languages.forEach(lang => {
            const data = {
                lang: {
                    Language: lang,
                    Tokens: languageData[lang]
                }
            };
            const fileContent = keyvalues.encode(data);
            const fileName = `addon_${lang.toLocaleLowerCase()}.txt`;
            this.emit(`data`, new Vinyl({
                path: fileName,
                contents: Buffer.from(fileContent)
            }));
        });


        Object.keys(languageData).forEach(language => {
            // put the language data into addon_{language}.txt
            let content = keyvalues.encode({
                lang: {
                    Language: language,
                    Tokens: languageData[language]
                }
            });

            const languageFile = new Vinyl({
                path: `addon_${language.toLowerCase()}.txt`,
                contents: Buffer.from(content)
            });
            this.emit("data", languageFile);
        });

        // write addon.csv file to the stream
        const headers = ["Tokens", ...languages];
        const csvContent: string[][] = [headers];

        let tokens = Object.keys(languageData[languages[0]]);
        tokens.forEach(token => {
            let row = [token];
            languages.forEach(language => {
                row.push(languageData[language][token]);
            });
            csvContent.push(row);
        });
        const stringCsvContent = stringify(csvContent);
        const csvFile = new Vinyl({
            path: "addon.csv",
            contents: Buffer.from(stringCsvContent)
        });

        this.emit("data", csvFile);

        // 结束
        this.emit("end");
        // } catch (err) {
        //     // return this.emit('error', new PluginError(PLUGIN_NAME, err));
        // }
    }
    return through2.obj(parseKV, endStream);
}