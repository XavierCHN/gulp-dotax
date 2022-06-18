import PluginError from "plugin-error";
import through2 from "through2";
import Vinyl from "vinyl";
import _ from "lodash";
import glob from "glob";
import fs from "fs-extra";
import xlsx from "node-xlsx";

import { convert as ConvertCSVToLocaliation } from "./csvToLocalization";

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

export function kvToLocalize(localizationOutPath: string, options: KVToLocalizationOptions) {
    let {
        csvOutPath,
        languages = Languages,
        customPrefix,
        customSuffix,
        customToken,
        transformTokenName: transformTokenNames,
        verbose,
    } = options;

    let localizationTokens: string[] = [];
    if (csvOutPath === undefined) csvOutPath = localizationOutPath;

    function parseKV(file: Vinyl, _: any, next: Function) {
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
                        }
                    }

                    let tokens = suffix.map(s => `${prefix}${itemKey}${s}`);

                    if (customToken != null) {
                        let extraToekens = customToken(itemKey, itemValue);
                        tokens = _.uniq(_.concat(tokens, extraToekens));
                    }

                    if (transformTokenNames != null) {
                        tokens = transformTokenNames(tokens, itemKey, itemValue);
                    }

                    localizationTokens = _.uniq(_.concat(localizationTokens, tokens));
                });
            });
        } catch (err) {
            return this.emit('error', new PluginError(PLUGIN_NAME, err));
        }
    }

    function endStream() {
        let languageData: Record<string, Record<string, string>> = {};
        // read all addon_*.txt files in the output path
        const addonFiles = glob.sync(`${localizationOutPath}/addon_*.txt`);
        // if there are extra languages, push them to the languages array
        addonFiles.forEach(file => {
            const fileContent = fs.readFileSync(file, "utf8");
            const data = keyvalues.decode(fileContent);
            const language = data.lang.Language;
            languages = _.uniq(_.concat(languages, language));
            languageData[language] = data.lang.Tokens;
        });

        // read all *.csv files in the csvOutPath
        const csvFiles = glob.sync(`${csvOutPath}/*.csv`);
        // if there are extra languages, push them to the languages array
        csvFiles.forEach(file => {
            const fileContent = fs.readFileSync(file, "utf8");
            const data = xlsx.parse(fileContent);
            const sheet = data[0];
            const languages_row = sheet.data[0] as string[];
            const rows = sheet.data.slice(1) as string[][];
            languages_row.forEach((item, i) => {
                languages = _.uniq(_.concat(languages, item));
                rows.forEach(tokenRow => {
                    const key = tokenRow[0];
                    const value = tokenRow[i];
                    if (languageData[item] == null) {
                        languageData[item] = {};
                    }
                    if (value !== null && value !== "" && value !== undefined) {
                        languageData[item][key] = value;
                    }
                });
            });
        });

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
            this.push(new Vinyl({
                path: fileName,
                contents: Buffer.from(fileContent)
            }));
        });


        Object.keys(languageData).forEach(language => {
            // put the language data into addin_{language}.txt
            let content = keyvalues.encode({
                lang: {
                    Language: language,
                    Tokens: languageData[language]
                }
            });

            const languageFile = new Vinyl({
                path: `addin_${language.toLowerCase()}.txt`,
                contents: Buffer.from(content)
            });
            this.emit("data", languageFile);
        });
        this.emit(`end`);

        // 结束
        this.emit("end");
    }
    return through2.obj(parseKV, endStream);
}