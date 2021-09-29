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