"use strict";

//# Приложение 1

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDb.count === '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if ( personalMovieDb.count < 10 ) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDb.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false;
        } else {
            personalMovieDb.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre === '' || genre == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDb.genres[i - 1] = genre;
            }
        }

        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимы жанр ${i + 1} - это ${item}`);
        });
    }
};