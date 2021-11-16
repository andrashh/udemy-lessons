"use strict";

const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

//let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    //i++;
    //if ( i == 1 ) {
    //    btn.removeEventListener('click', deleteElement);
    //}
}

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

btn.forEach(item => {
    item.addEventListener('click', deleteElement, {once:true});
});

const link = document.querySelector('a');

/*link.addEventListener('click', (e) => {
   e.preventDefault();
    console.log(e.target);
});*/

// MOBILE
// touchstart
// touchmove
// touchend
// touchenter
// touchleave

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
/*
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });*/
});

// e.touches
// e.targetTouches -
// e.changedTouches - список пальцев которые используются в событии/ которые совершили действия