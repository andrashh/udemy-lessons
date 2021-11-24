"use strict";

const persone = {
    name: 'Alex',
    tel: '+79999999999',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);