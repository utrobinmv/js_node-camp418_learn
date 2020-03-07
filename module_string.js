const userName = 'Иван';
const userLastName = 'Бергман';
const userAge = 38;
const userPatronymic = "Александрович";

let organization = 'ООО "Василек"';
let person = "Скарлетт О'Хара";

let organizationTwo = "ООО \"Василек\"";
let personTwo = 'Скарлетт О\'Хара';

console.log(organizationTwo);
console.log(personTwo);

const text = "Скажи-ка, дядя, ведбь не даром \n Москва, спаленная пожаром, \n Французу отдана?";

const text2 = `Скажи-ка, дядя, 
ведбь не даром Москва,
спаленная пожаром, Французу
 отдана?`;

console.log(text);

console.log(text2);

const url = 'http:\\\\yandex.ru';

console.log(url);

const message = `Здравствуйте ${userName} ${userLastName}, подздравляем, ваш возвраст ${userAge}`;

console.log(message);

const a = 15;
const b = 8;

console.log(`${a} + ${b} = ${a + b}`);

console.log(userName.length);

console.log(userName[0]);

for (let i = 0; i < userName.length ; i++) {
    console.log(userName[i]);
}

for (const char of userName) {
    console.log(char);
}

const text3 = 'Буря мглою небо кроет, Вихи снежные крутя';

if (text3.includes('небо')) {
    console.log('В тексте упоминается небо');
}

console.log(text3.includes('Буря'));

console.log(text3.includes('Буря', 5));
	    
console.log(text3.startsWith('Буря'));

console.log(text3.indexOf('небо2'));

const userFullName = 'Джеймс Бонд';
const userName2 = userFullName.slice(0, 6);
const userLastName2 = userFullName.slice(7);

console.log(userName2);

console.log(userLastName2);

console.log(userFullName.slice(-4));

console.log(userFullName.toUpperCase());
console.log(userFullName.toLowerCase());

console.log(userName.trim());
