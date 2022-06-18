const gulp = require('gulp');
const { kvToJS } = require('./lib/kvToJS');

gulp.task(`default`, async (callback) => {
    await gulp
        .src('./npc/**/*.{txt,kv}')
        .pipe(
            kvToJS({
                kvDir: './npc',
            })
        )
        .pipe(gulp.dest('./kv/'));
});
