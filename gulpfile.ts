import gulp from 'gulp';
import path from 'path';
import * as dotax from './src';

const paths: { [key: string]: string } = {
    excels: 'excels',
    kv: 'game/scripts/npc',
    panorama: 'content/panorama',
    game_resource: 'game/resource',
};

const cSheetToKV = async () => {
    gulp.src(`${paths.excels}/*.{xlsx,xls}`)
        .pipe(
            dotax.sheetToKV({
                sheetsIgnore: '^__', // 忽略以两个下划线开头的sheet
                indent: `	`, // 自定义缩进
                customPinyins: {
                    远看山有色近听水无声: 'yuan kan shan you se jin ting shui wu sheng',
                },
            })
        )
        .pipe(gulp.dest(paths.kv));
};

const cKVToJS = async () => {
    gulp.src(`${paths.kv}/**/*.{kv,txt}`)
        .pipe(
            dotax.kvToJS({
                fileName: 'sync_keyvalues.js',
            })
        )
        .pipe(gulp.dest(`${paths.panorama}/src/utils`));
};

const cKVToLocal = async () => {
    gulp.src(`${paths.kv}/**/*.{kv,txt}`).pipe(
        dotax.kvToLocalsCSV(`${paths.game_resource}/addon.csv`, {
            customPrefix: (key, data, path) => {
                if (data.BaseClass && /ability_/.test(data.BaseClass)) {
                    if (/combos/.test(path)) {
                        return 'dota_tooltip_ability_combo_';
                    } else {
                        return 'dota_tooltip_ability_';
                    }
                }
                return '';
            },
            customSuffix: (key, data, path) => {
                let suffix = [''];
                // 这个范例是如果说某个技能是羁绊的KV文件出来的，那么给他做一个每个等级的后缀
                if (/combos/.test(path)) {
                    suffix = ['_description'];
                    let maxLevel = data.MaxLevel;
                    if (maxLevel) {
                        suffix = suffix.concat(
                            Array.from({ length: maxLevel }, (_, i) => `_level${i + 1}`)
                        );
                    }
                }
                return suffix;
            },
            exportAbilityValues: false,
        })
    );
};

const cCSVToLocalization = async () => {
    gulp.src(`${paths.game_resource}/addon.csv`).pipe(dotax.csvToLocals(paths.game_resource));
};

const cLocalsToCSV = async () => {
    dotax.localsToCSV(`${paths.game_resource}/addon_*.txt`, `${paths.game_resource}/addon.csv`);
};

gulp.task(`img_pcache`, async () => {
    await gulp
        .src(`content/panorama/images/**/*.{jpg,png,psd}`)
        .pipe(dotax.imagePrecacche(`content/panorama/images/`))
        .pipe(gulp.dest(path.join(paths.panorama, `src/utils`)));
});
gulp.task('img_pcache:watch', async () => {
    gulp.watch(`content/panorama/images/**/*.{jpg,png,psd}`, gulp.series('img_pcache'));
});

gulp.task('sheetToKV', cSheetToKV);
gulp.task('sheetToKV:watch', () => {
    gulp.watch(`${paths.excels}/*.{xlsx,xls,csv}`, cSheetToKV);
});

gulp.task('kvToJS', cKVToJS);
gulp.task('kvToJS:watch', () => {
    gulp.watch(`${paths.kv}/**/*.{kv,txt}`, cKVToJS);
});

gulp.task('kvToLocal', cKVToLocal);
gulp.task('kvToLocal:watch', (callback: Function) => {
    gulp.watch(`${paths.kv}/**/*.{kv,txt}`, cKVToLocal);
    callback();
});

gulp.task('csvToLocalization', cCSVToLocalization);
gulp.task('csvToLocalization:watch', (callback: Function) => {
    gulp.watch(`${paths.game_resource}/addon.csv`, cCSVToLocalization);
    callback();
});

gulp.task('makeCSV', cLocalsToCSV); // 这个任务一般只需要执行一次，用来把现有的locals文件转换为csv文件
gulp.task('predev', gulp.series('sheetToKV', 'kvToJS', 'csvToLocalization', 'img_pcache'));
gulp.task('dev', gulp.parallel('sheetToKV:watch', 'csvToLocalization:watch', 'img_pcache:watch'));
gulp.task('build', gulp.series('predev', 'csvToLocalization'));
gulp.task('jssync', gulp.series('sheetToKV', 'kvToJS'));
gulp.task('kvl', gulp.series('kvToLocal'));
gulp.task('prod', gulp.series('sheetToKV', 'kvToJS', 'csvToLocalization', 'img_pcache'));
