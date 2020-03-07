function sayHello(name = 'незнакомец', role = 'неизвестен'){
    console.log('Hello, ' + name + ', твой уровень доступа: ' + role);    
}

function sum(a,b) {

    const c = a + b;
    console.log(a + ' + ' + b + ' = ' + c);

    return c;
}


console.log('Всем привет');
let a; //Создам переменную а
let b = 1; //Создаем переменную b со значением 1

a = 2;
b = 15;

let c = 18 + 22;
console.log('Вывод переменной a = ' + a);
console.log('Вывод переменной c = ' + c);
console.log('Вывод переменной c = ' + c);

let e = 'Hello';

console.log(e);

const t = a + 1;


sayHello();
sayHello('Олег','user');
sayHello('Марина','admin');

sum(1,2);

const speedA = 60;
const speedB = 130;

const sumSpeed = sum(speedA, speedB);
console.log('Скорость сближения = ', sumSpeed); //выведет: скорость сближения = 190

console.log('End lesson 1');

console.log('Start lesson 2 - Основы работы с консолью');

let name = 'Максим';
let age = 15;

console.log('Имя: %s, возвраст: %d',name,age); //Выведет имя Максим возврат 15 Здесь %s означает строку а %d значит число




