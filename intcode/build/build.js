const rollup=require("rollup");
const gulp = require('gulp');
const rename=require("gulp-rename");
const uglify=require("gulp-uglify");
const path=require("path");


const resolveFile=function(filePath){
    return path.join(__dirname,'..',filePath);
}

//配置参数
const options={
    //源文件
    srcPath:"src/intcode.js",
    //编译后文件
    distPath:"dist/intcode.js",
}

const inputOptions={
    input:resolveFile(options.srcPath),
}
const outputOptions={
    output:{
        file:resolveFile(options.distPath),
        format:"iife",
        name:"intcode"
    },
}

async function build(){
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
}

function minjs(){
    return gulp.src(resolveFile(options.distPath))
        .pipe(uglify())
        .pipe(rename("intcode.min.js"))
        .pipe(gulp.dest(resolveFile("dist")))
}

exports.default=gulp.series(build,minjs);
