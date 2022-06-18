import through2 from "through2";
import Vinyl from "vinyl";
const { readCSVSync } = require("read-csv-sync");
const keyvalues = require("keyvalues-node");

export function convertCSVToLocalization(file: Vinyl): Record<string, Record<string, string>> {
    const data = readCSVSync(file.path) as Record<string, string>[];
    let languageData: Record<string, Record<string, string>> = {};
    Object.keys(data[0]).forEach(s => { if (s !== `Tokens`) languageData[s] = {}; });
    data.forEach(row => {
        let token = row.Tokens;
        Object.keys(row).forEach(key => {
            if (key !== `Tokens`) {
                let lang = key.trim();
                let value = row[lang];
                if (value != null && value != undefined && value !== "") {
                    languageData[lang][token] = `"${value.replace("\\n", "___x___combine____n___")}"`;
                }
            }
        });
    });
    return languageData;
}

export function convert(file: Vinyl, enc: any, next: Function) {
    let data = convertCSVToLocalization(file);
    Object.keys(data).forEach(language => {
        // put the language data into addin_{language}.txt
        let content = keyvalues.encode({
            lang: {
                Language: language,
                Tokens: data[language]
            }
        });

        const languageFile = new Vinyl({
            path: `addon_${language.toLowerCase()}.txt`,
            contents: Buffer.from(content)
        });
        this.emit("data", languageFile);
    });
    this.emit(`end`);
}

export function csvToLocalization() {
    return through2.obj(convert);
}