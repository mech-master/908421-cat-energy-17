/*"use strict"/**/

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("gulp-autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");

gulp.task("css", function() {
  return gulp.src("source/less/style.less")
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(less())
  .pipe(autoprefixer([
    autoprefixer()
  ]))
  .pipe(csso())
  .pipe(rename("style.min.css"))
  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("build/css"))
  .pipe(server.stream());
});


gulp.task("server", function() {
  server.init({
    server: "build/"
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch([
    "source/img/icon-vk.svg",
    "source/img/icon-fb.svg",
    "source/img/icon-insta.svg",
    "source/img/htmlacademy.svg",
    "source/img/icon-phone.svg",
    "source/img/icon-mail.svg"
  ], gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

var imagemin = require("gulp-imagemin");

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("source/img"));
});

var webp = require("gulp-webp");

gulp.task("webp", function() {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("source/img"));
});

var svgstore = require("gulp-svgstore");

gulp.task ("sprite", function() {
  return gulp.src([
    "source/img/icon-vk.svg",
    "source/img/icon-fb.svg",
    "source/img/icon-insta.svg",
    "source/img/htmlacademy.svg",
    "source/img/icon-phone.svg",
    "source/img/icon-mail.svg"
  ])
  .pipe(svgstore ({inlineSvg: true}))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"));
});

var posthtml = require("gulp-posthtml");
var include = require("posthtml-include")

gulp.task("html", function() {
  return gulp.src("source/*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"))
})

gulp.task("copy", function() {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.ico"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
})

var del = require("del");

gulp.task("clean", function() {
  return del("build");
})

gulp.task("refresh", function(done) {
  server.reload();
  done();
})

gulp.task("build", gulp.series(
  "clean",
  "webp",
  "copy",
  "css",
  "sprite",
  "html"
));

gulp.task("start", gulp.series("build", "server"));
