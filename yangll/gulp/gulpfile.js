//载入gulp相关插件
var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'), //压缩html
    jsmin = require('gulp-uglify'),//压缩js 形如：index.min.js
    cssmin = require('gulp-minify-css'),//压缩css
    csslint = require('gulp-csslint'), //css语法检查
    jshint = require('gulp-jshint'),//js语法检测
    less = require('gulp-less'), //编译less文件
    autoprefixer = require('gulp-autoprefixer'), //添加浏览器前缀
    csso = require('gulp-csso'), //合并css属性
    gulpFilter = require('gulp-filter'),//过滤
    print = require('gulp-print'), //打印相关信息
    debug = require('gulp-debug'), //任务执行debug
    cached = require('gulp-cached'),
    rename=require('gulp-rename'), //重命名
    clean = require('gulp-clean'), //清理文目标文件夹
    watch = require('gulp-watch'),
    connect = require('gulp-connect'), //和livereload配合开启服务
    refresh = require('gulp-livereload'),
    browserSync = require('browser-sync').create();

// 设置文件路径
var InputPath = '../gulpTest/src/',
    OutPath = '../gulpTest/dist/',
    cssInputPath = InputPath + 'css/*.less',
    cssOutPath = OutPath + 'css/',
    jsInputPath = InputPath + 'js/*.js',
    jsOutPath = OutPath + 'js/',
    htmlPath = '../gulpTest/index.html';

//css相关处理
gulp.task('cssOperation',function () {
    return gulp.src(cssInputPath)
        .pipe(debug())
        .pipe(less())  //编译less
        .pipe(autoprefixer()) //自动添加浏览器前缀
        // .pipe(csso())  //合并css属性 会将样式在一行显示，起到一部分压缩作用
        .pipe(csslint()) //语法检测
        .pipe(gulp.dest(cssOutPath)) //先编译到dist目录
        .pipe(cssmin()) //压缩css
        .pipe(rename(function(path){
            path.basename += ".min";
        })) //重命名
        .pipe(gulp.dest(cssOutPath)) //再编译到dist目录
        .pipe(browserSync.reload({stream: true}));
});

//JS相关处理
gulp.task('jsOperation',function(){
    return gulp.src(jsInputPath)//需要压缩js文件路径
        .pipe(jshint())
        .pipe(debug())
        .pipe(jsmin())
        .pipe(rename(function(path){
            path.basename += ".min";
        })) //重命名
        .pipe(gulp.dest(jsOutPath)) //再编译到dist目录
        .pipe(browserSync.reload({stream: true}));
});

//添加监听任务
gulp.task("autowatch",function(){
    var files = [
        '**/*.html',
        '**/*.css',
        '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "../gulpTest/",
        },
        files: ["../gulpTest/**/*.html", "../gulpTest/**/*.css", "../gulpTest/**/*.js"],
        logPrefix: "操作提示:"
    });

    gulp.watch([cssInputPath],['cssOperation']);
    gulp.watch([jsInputPath],['jsOperation']);
    gulp.watch(htmlPath).on('change', browserSync.reload);
});

//定义默认任务
gulp.task('default',['autowatch']);
