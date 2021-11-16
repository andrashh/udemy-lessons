"use strict";

// To string
console.log(typeof(String(4)));

console.log(typeof(4 + ''));

// To number
console.log(typeof(Number('5')));

console.log(typeof(+'15'));

console.log(typeof(parseInt("15px", 10)));

// To boolean - 0, '', null, undefined, NaN
let switcher = null;
if (switcher) {
    console.log("Working...");
}

console.log(typeof(Boolean('5')));

console.log(typeof(!!"131123"));
