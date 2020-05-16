'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const presonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


function rememberMyFilms() {
    for ( let i = 0; i < 2; i++ ) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько его оцените?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            presonalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Введите коррекные данные');
            i--;
        } 
    }
}

// rememberMyFilms();

// let i = 0;

// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько его оцените?', '');
//     i++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         presonalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Введите коррекные данные');
//         i--;
//     } 
// }


// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько его оцените?', '');
//     i++;

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         presonalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Введите коррекные данные');
//         i--;
//     } 
// }
// while (i < 2);



function detecteLevel() {
    let r = presonalMovieDB.count;

    if (r < 10) {
        console.log('Мало');
    } else if (r >= 10 && r < 30) {
        console.log('Нормально');
    } else if (r >= 30) {
        console.log('Задрот');
    } else {
        console.log('Error');
    }
}

// detecteLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(presonalMovieDB);
    }
}

showMyDB(presonalMovieDB.privat);

function writeYourGeners() {
    for(let i = 1; i <= 3; i++) {
        let gener = prompt(`Ваш любимый жанр под номером ${i}`);
        presonalMovieDB.geners[i - 1] = gener;
    }
}

writeYourGeners();







// =========================================================================================  //

//Условия
// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }


// const num = 50;

// if (num < 50) {
//     console.log('Мало');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Пойдет');
// }
// //Сокращенная запись
// //Тернарный оператор ( потому что три аргумента, еще есть бинарные и унарные )
// // ( Условие ) ? если выполняется : если не выполняется;
// (num === 50) ? console.log('Пойдет') : console.log('Ошибка');

// // Конструкция switch - 
// //Только строгое сравнение
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Много');
//         break;
//     case 51: console.log('Попал');
//         break;
//     // Если не выполнится ни одно условие
//     default:                             
//         console.log('Вообще мимо');
//         break;
// }

//Циклы
// let num = 50;
// Пока ( условие выполняется ) {
//    Делай это действие 
// }
// while ( num <= 55 ) {
//     console.log(num);
//     num++;
// }



// сделай {
//     действие;
// }
// пока ( выполняется условие );

// do {
//     console.log(num);
//     num++;
// }
// while ( num < 55 );


// for ( то с чего начнется;  на чем остановится; шаг цикла ) {
//     действие;
// }    

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         break;   //остановит цикл на 6
//         continue; //пропустит 6 и продолжит цикл
//     }
//     console.log(i);

// }

//Функции
// function имяФункции (аргумент, ...) {
//     действие;
// }


// //Создаем функцию
// function firstFunk (text) {
//     console.log(text);
// }
// //Вызов функции
// firstFunk('Hello world');

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));


// const logger = function() {
//     console.log('Hello world');
// };

// logger();

// const calca = (a , b) => {
//     return (a + b);
// };