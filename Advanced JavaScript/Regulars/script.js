"use strict";

//new RegExp('pattern', 'flags');

// const ans = prompt('Введите ваше имя');
//
// const reg = /\d/g;
//
// console.log(ans.match(reg));

const str = 'My name is R2D2';
console.log(str.match(/\D/ig));
// i - регистр
// g
// m

// \d - цифры
// \w - слова и буквы
// \s - пробелы

//console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
//
// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));