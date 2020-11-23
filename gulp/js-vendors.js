const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
    // Insert libs src here:
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
];

module.exports = function vendors(cb) {
    return vendorsScripts.length
        ? gulp.src(vendorsScripts)
            .pipe(concat('libs.js'))
            .pipe(gulp.dest('app/js/'))
        : cb();
};
