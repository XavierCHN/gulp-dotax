import through2 from "through2";
import Vinyl from "vinyl";
import xlsx from "node-xlsx";
const keyvalues = require("keyvalues-node");

const PLUGIN_NAME = `gulp-dotax:csvToLocalization`;

export function convertCSVToLocalization(contents: string): Record<string, Record<string, string>> {
    const workbook = xlsx.parse(contents);
    const [sheet] = workbook;
    const data = sheet.data as string[][];
    const languages = data[0].slice(1);
    const localizationData = data.slice(1);
    let languageData: Record<string, Record<string, string>> = {};
    languages.forEach((language, index) => {
        languageData[language] = {};
        localizationData.forEach(row => {
            const token = row[0];
            const cell = row[index];
            if (cell && cell !== null && cell !== undefined && cell !== "") {
                languageData[language][token] = cell;
            }
        });
    });
    return languageData;
}

export function convert(file: Vinyl, enc: any, next: Function) {
    let data = convertCSVToLocalization(file.contents.toString());
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