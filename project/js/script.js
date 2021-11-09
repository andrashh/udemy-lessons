/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const removeAdvert = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    bgImage = document.querySelector('.promo__bg'),
    films = document.querySelector('.promo__interactive-list');

removeAdvert.forEach(item => {
    item.remove();
});

genre.textContent = "Драма";

bgImage.style.cssText = 'background: url(../project/img/bg.jpg) center center/cover no-repeat;';

films.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    films.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});