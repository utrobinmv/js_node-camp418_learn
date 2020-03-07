const readlineSync = require('readline-sync');

const userName = readlineSync.question('Как тебя зовут? ');
console.log('Привет', userName);

