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

// const str = prompt('', '');
//const products = str.split(', ');
//products.sort();
//console.log(products.join('; '));

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;
/*
console.log(add);
console.log(clone);*/

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adada';
console.log(newArray);
console.log(oldArray);

console.log('----------');

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpreess', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b ,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

console.log('----------4');

const array = ['a', 'b'];

const newAaray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);