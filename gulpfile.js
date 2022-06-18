const gulp = require('gulp');
const { kvToJS } = require('./lib/kvToJS');
const { kvToLocalization } = require('./lib/kvToLocalization');

gulp.task(`default`, async (callback) => {
    await gulp
        .src('./npc/**/*.{txt,kv}')
        .pipe(kvToLocalization('./localizations', {}))
        .pipe(gulp.dest('./localizations/'));
});
