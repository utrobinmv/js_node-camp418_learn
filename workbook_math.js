const readlineSync = require('readline-sync');

function enterNumber(question) {
    const number = readlineSync.question(question);
    return number;
}




number1 = enterNumber('Введиче число 1 = ');
number2 = enterNumber('Введиче число 2 = ');
const workOfTwoNumbers = number1 * number2;
const concatOfTwoNumbers = 1 * (number1 + number2);
console.log(number1 + ' * ' + number2 + " = " + workOfTwoNumbers);
console.log(number1 + ' + ' + number2 + " = " + concatOfTwoNumbers);




