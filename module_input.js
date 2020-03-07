const readlineSync = require('readline-sync');

const userAge = 15;
const userRole = 'admin';

if (userRole == 'admin') {
    console.log('Включен режим администрирования');
} else {
    console.log('Включен пользовательский режим');
    if (userAge >= 18) {
	console.log('Доступ к закрытой части системы получен');
    } else {
	console.log('Включен режим родительского контроля');
    }

}

console.log('Добро пожаловать');

for (let i = 0; i < 10; i++) {
    console.log('i', i);
}

//for (let answer = ''; answer != 'Y'; answer = readlineSync.question('Принимаете условия лицензионного соглашаения?')) {
//}

for (let answer = ''; answer != 'Y'; ) {
  answer = readlineSync.question('Принимаете условия лицензионного соглашения? ');
}

let n = 1;

while (n % 2 != -0) {
    n = readlineSync.question('Ввести четное число ');
}

do {
    n = readlineSync.question('Введите четное число ');
} while (n % 2 != 0);


    
