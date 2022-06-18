const gulp = require('gulp');
const { kvToJS } = require('./lib/kvToJS');

gulp.task(`default`, (callback) => {
    gulp.src('./npc/**/*.{txt,kv}')
        .pipe(
            kvToJS({
                kvDir: './npc',
            })
        )
        .pipe(gulp.dest('./kv/'));
    callback();
});
