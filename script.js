'use strict';

const numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');

const presonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');   
const b = prompt('На сколько его оцените?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько его оцените?', '');

presonalMovieDB.movies[a] = b;
presonalMovieDB.movies[c] = d;

console.log(presonalMovieDB);