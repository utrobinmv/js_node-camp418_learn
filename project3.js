const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');


function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function readVopros(num) {

    const folderPath = 'voprosy';

    let numberVopros = 0;
    let i;
    let otvetNum = 0;
    
    fs.readdirSync(folderPath).map(fileName => {

	numberVopros = numberVopros + 1;

	if (num == numberVopros) {

	    var fileStrings = fs.readFileSync(path.join(folderPath, fileName)).toString().split("\n");

	    console.log(fileStrings[0]);
	    otvetNum = fileStrings[1];

	    i = 2;
	    for(i = 2; i in fileStrings; i++) {
		console.log("Вариант " + (i-1) + ':' + fileStrings[i]);
	    }
	    
	}

	return path.join(folderPath, fileName)
    })

    return otvetNum;

}

function povtorVopros(i, num, voprosHystory) {

    for (let j = 0; j < i; j++) {

	//console.log('--- ' + j + ' ---' + voprosHystory[j]);
	
	if(num == voprosHystory[j]) return true;
    }

    return false;
}

var voprosHystory = [];
let pravilno = 0;

for(i = 0; i<5; i++) {

    do {
	numberVopros = getRandomInt(1,6);

	//console.log('- ' + numberVopros);

	voprosHystory[i] = numberVopros;
	
    } while (povtorVopros(i, numberVopros, voprosHystory) == true);
    
    console.log('Вам задали номер вопроса: ' + numberVopros);

    otvet = readVopros(numberVopros);

    let userOtvet = readlineSync.question('Назовите правильный ответ: ');

    if (otvet == userOtvet) pravilno = pravilno + 1;

}

console.log('Игра окончена. Вы дали ' + pravilno + ' правильных ответов!');

