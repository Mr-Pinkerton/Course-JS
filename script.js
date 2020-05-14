'use strict';

// const numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');

// const presonalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     geners: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', '');   
// const b = prompt('На сколько его оцените?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько его оцените?', '');

// presonalMovieDB.movies[a] = b;
// presonalMovieDB.movies[c] = d;

// console.log(presonalMovieDB);

//Условия
if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error');
}


const num = 50;

if (num < 50) {
    console.log('Мало');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Пойдет');
}
//Сокращенная запись
//Тернарный оператор ( потому что три аргумента, еще есть бинарные и унарные )
// ( Условие ) ? если выполняется : если не выполняется;
(num === 50) ? console.log('Пойдет') : console.log('Ошибка');

// Конструкция switch - 
//Только строгое сравнение
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Много');
        break;
    case 51: console.log('Попал');
        break;
    // Если не выполнится ни одно условие
    default:                             
        console.log('Вообще мимо');
        break;
}