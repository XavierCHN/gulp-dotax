const gulp = require('gulp');
const { kvToJS } = require('./lib/kvToJS');
const { kvToLocalization } = require('./lib/kvToLocalization');

gulp.task(`default`, (callback) => {
    gulp.src('./npc/npc_abilities.txt')
        .pipe(kvToLocalization('./npc', {}))
    callback();
});
