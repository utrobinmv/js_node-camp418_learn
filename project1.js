const readlineSync = require('readline-sync');

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function compareTwoStr(str1, str2){

    //console.log(str1.length);

    let sovpad = 0;
    let str_sovpad = '';
    
    for(i=0; i<str1.length;i++) {
	if(str1[i] == str2[i]){
	    //console.log(i)
	    sovpad = sovpad + 1;
	    if (str_sovpad != '') {
		str_sovpad = str_sovpad + ' и '; 
	    }
	    
	    str_sovpad = str_sovpad + str1[i];
	} else {
	    //console.log('i:' + i);
	}
    }

    if (sovpad == 0) return 'Совпадений нет!';

    if (sovpad == str1.length) {
	console.log('Ура, вы угадали!');
	return '';
    }

    
    return sovpad + ' (' + str_sovpad + ')';
}


let input_str = '56478';

let lenInputStr = getRandomInt(3,6);
let InputStr = '';

for (i=0; i < lenInputStr; i++) {
    InputStr = InputStr + getRandomInt(0,9);
}

console.log('Random string = ' + InputStr);

input_str = InputStr;

let numHod = 0;
const kolvoHod = 10;

console.log('У вас будет ' + kolvoHod + ' попыток!');

do {

    numHod = numHod + 1;
    const number = readlineSync.question('Угадайте число из цифр длиной от 3х до 6ти символов:');

    result = compareTwoStr(input_str,number);

    console.log(result);
    
} while (result != '' && numHod < kolvoHod)
    
