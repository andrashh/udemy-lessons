"use strict";
let a = 15;
console.log(a);
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
