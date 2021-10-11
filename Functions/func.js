"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage("Hello World");

function funcDeclaration() { //создается до начала выполнения скрипта, можно вызвать перед объявлением
    console.log("World!");
}
funcDeclaration();

const funcExpression = function () { //создается только тогда, когда доходит поток кода, можно вызвать только после объявления
    console.log("hello!");
};
funcExpression();

// Callback func
function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);