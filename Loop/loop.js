"use strict";

let num = 50;

/*while (num <= 55) {
    console.log(num);
    num++;
} //пока num < 55 мы выполняем*/

do {
    console.log(num);
    num++;
}
while (num < 55);

for ( let i = 1; i < 10; i++ ) {
    /*if (i === 6){ //Прерывает на 5
        break;
    }*/
    if (i === 6) { //Пропускает 6
        continue;
    }
    console.log(i);
}