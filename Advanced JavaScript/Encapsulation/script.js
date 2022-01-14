"use strict";

class Car {
    constructor(model, color, price) {
        this._model = model;
        this._color = color;
        this._price = price;
    }

    view = () => {
        console.log(`Марка: ${this._model}, цвет: ${this._color}, цена: ${this._price}`);
    }

    get model() {
        return this._model;
    }

    set model(model) {
        if (typeof model === 'string' && model === 'Passat') {
            this._model = model;
        } else {
            console.log('Не пассат');
        }
    }
}
const passat = new Car('Passat', 'Black', 550000);
passat.view();


(function (){
    const numbers = 5;
    console.log(numbers + ' - Anon func');
}());

const user = (function (){
    const privat = function () {
        console.log('Module work');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();