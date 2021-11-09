"use strict";

let xx = 5;
// alert(xx++); // 5

const ex = [] + false - null + true; // NaN
console.log(ex);

let y = 1;
let x = y = 2; // 2
console.log(x);

const ex2 = [] + 1 + 2; // 12
console.log(ex2);

// alert("1"[0]); // 1

console.log(2 && 1 && null && 0 && undefined);
// & запинается на лжи
// || запинается на правде

console.log(!!(1 && 2) === (1 && 2));

// alert( null || 2 && 3 || 4 );

const arr = [1,2,3];
const arr2 = [1,2,3];
console.log(arr == arr2); // false

// alert(+"Infinity"); // NaN

console.log("Ёжик" > "яблоко"); //false

console.log( 0 || "" || true || undefined || 2 || false );