import PluginError from "plugin-error";
import through2 from "through2";
import Vinyl from "vinyl";

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
     * 是否同时输出本地化CSV文件，默认为 true，可以方便的和其他人合作
     * @type {boolean}
     * @memberof KVToLocalizationOptions
     */
    outputCSV?: boolean;
    /**
     * 需要输出的语言，默认为 ["SChinese", "English"]
     * @type {string[]}
     * @memberof KVToLocalizationOptions
     */
    languages?: string[];
    /**
     * 自定义的前缀，key为kv的BaseClass的正则匹配字符串，value为要使用的前缀
     * @type {Record<string, string>}
     * @memberof KVToLocalizationOptions
     */
    customPrefix?: Record<string, string>;
    /**
     * 需要输出的自定义后缀，key为kv的BaseClass的正则匹配字符串，value为要使用的后缀
     * @type {Record<string, string[]>}
     * @memberof KVToLocalizationOptions
     */
    customSuffix?: Record<string, string[]>;
    /**
     * 啰嗦模式
     * @type {boolean}
     * @memberof KVToLocalizationOptions
     */
    verbose?: boolean;
}

export function kvToLocalize(options: KVToLocalizationOptions) {
    const {
        localizationOutPath,
        outputCSV = true,
        languages = Languages,
        customPrefix,
        customSuffix,
        verbose
    } = options;
    const prefixRules: Record<string, string> = {
        ...{
            "[ability|item]_[lua|datadriven]": "dota_tooltip_ability_",
            "npc_*": "", // 其实这个规则不用写的，写这里做个范例吧
        },
        ...customPrefix,
    };
    const suffixRules: Record<string, string[]> = {
        ...{
            "[ability|item]_[lua|datadriven]": ["_description"]
        },
        ...customSuffix
    };

    let localizationTokens = {} as any;

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
                    const BaseClass = itemValue.BaseClass;
                    if (BaseClass == null) {
                        if (verbose) {
                            console.log(`${file.path}中的${key}的${itemKey}没有BaseClass`);
                            return;
                        }
                    }

                    let prefix = "";
                    const prefixReg = Object.keys(prefixRules).find(reg => BaseClass.match(reg));
                    if (prefixReg) prefix = prefixRules[prefixReg];

                    let suffix = [""];
                    const suffixReg = Object.keys(suffixRules).find(reg => BaseClass.match(reg));
                    if (suffixReg) {
                        suffix = suffixRules[suffixReg];
                        suffix.forEach(s => {
                            if (!suffix.includes(s)) suffix.push(s);
                        });
                    }
                });
            });
        } catch (err) {
            return this.emit('error', new PluginError(PLUGIN_NAME, err));
        }
    }

    function endStream() {

    }

    return through2.obj(parseKV, endStream);
}