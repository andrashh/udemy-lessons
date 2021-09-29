"use strict";
let number = 5; //переменная может меняться
const leftBorderWidth = 1; // постоянная переменная
console.log(number + leftBorderWidth);

// типы данных
// числа max 2 в 53 степени, или объявить Bigint
console.log('string' * 9); // NaN - не число

// объекты
const obj = {
    name: "John", // свойство
    age: 25, // свойство
    isMarried: false // свойство
};
//console.log(obj.name); - использовать через точку
//console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; //массив, это не отдельный тип данных
console.log(arr[1]);

/*
const resault = confirm('Are you here?');
console.log(resault);*/

//const answer = prompt('вам есть 18?', '');
//console.log(answer); // все что приходит от пользователя, будет в string

/*const answers = [];
answers[0] = prompt('Ваше имя?', '');
answers[1] = prompt('Ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof (answers));*/

//# Интерполяция
const category = 'toys';
const user = 'Ivan';
console.log(`https://someurl.com/${category}/5` );
//alert(`Привет, ${user}`);

// !! Унарный плюс
console.log(4+ +"4");

//# Операторы

let incr = 10,
    decr = 10;
console.log(++incr);
console.log(--decr);


//# Приложение 1
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for ( let i = 0; i < 2; i++ ) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько оцените его?', '');

        if ( a != null && b != null && a != '' & b != '' && a.length < 50 ) {
            personalMovieDb.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if ( personalMovieDb.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDb.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}
showMyDB(personalMovieDb.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const question = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDb.genres[i - 1] = question;
        /* personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, ''); */
    }
}
writeYourGenres();