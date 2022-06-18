const gulp = require('gulp');
const { kvToJS } = require('./lib/kvToJS');
const { kvToLocalization } = require('./lib/kvToLocalization');

gulp.task(`default`, (callback) => {
    console.log(`starting default task`);
    gulp.src('./npc/*.txt').pipe(kvToLocalization('./npc', {}));
    gulp.src('./npc/*.txt')
        .pipe(kvToJS({ kvDir: './npc' }))
        .pipe(gulp.dest('./npc'));
    callback();
});
