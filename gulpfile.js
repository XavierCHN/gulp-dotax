const gulp = require('gulp');
const { csvToLocals } = require('./lib/kvToLocalization');

gulp.task('default', async () => {
    gulp.src('./locals/*.csv').pipe(csvToLocals());
});
