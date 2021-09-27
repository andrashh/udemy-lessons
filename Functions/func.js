"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage("Hello World");

function funcDeclaration() {
    console.log("World!");
}
funcDeclaration();

const funcExpression = function () {
    console.log("hello!");
};
funcExpression();