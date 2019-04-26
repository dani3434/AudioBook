//Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

//Função para compilar o SASS e adicionar os prefixos
function compilaSass(){
  return gulp.src('css/scss/*.scss').pipe(sass(
    {outputStyle: 'expanded'}
    )).pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
    })).pipe(gulp.dest('css/')).pipe(browserSync.stream());

}

//Tarefa de gulp para a função de SASS
gulp.task('sass',compilaSass);

//Função para iniciar o servidor do browser
function browser(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

//tarefa do browser-sync
gulp.task('browser',browser);

//Função de watch do GULP 
function watch(){
  gulp.watch('css/scss/*.scss',compilaSass);
  gulp.watch(['*.html','*.js']).on('change',browserSync.reload);

}

//inicia a tarefa de watch 
gulp.task('watch',watch);

//Tarefa padrão do GULP,que inicia o watch e o browser-sync
gulp.task('default',gulp.parallel('watch','browser'));
//Para finalizar a tarefa use o crt + C