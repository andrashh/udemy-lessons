"use strict";
const num = 50;

/*if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

(num === 50) ? console.log('Ok') : console.log('Error'); //Тернарное условие. использует 3 аргумента*/

switch (num) { //строгое сравнение
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('в точку');
        break;
    default:
        console.log('не в этот раз');
        break;
}