"use strict";

const arr = [10, 2, 33, 6, 8];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}
console.log(arr);

// arr.pop(); // Удаляет последний элемент
// arr.push(10); // Добавляет в конец элемент

console.log(arr);

for (let value of arr) {
    console.log(value);
}

arr.forEach(function (item, i, arr ) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));