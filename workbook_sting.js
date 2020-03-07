const fullName = 'qwerty';

let convertName = '';

for(let i = fullName.length; i > 0; i--) {

    convertName = convertName + fullName[i-1];
    //console.log(i);
}

console.log(convertName);


//Остановили на странице
// https://418.camp/knowledge_base/js/nodejs/07_strings

const str1 = 'Буря мглою небо кроет';
const str2 = 'мглою';

if(str1 == str2) {
    console.log('Строки совпадают');
} else if(str2.includes(str2)) {
    console.log('Строки есть вхождение');

    index_str = str1.indexOf(str2);
    len_str = str2.length;
   
    str2_replace1 = str1.slice(0,index_str);

    str2_replace2 = '';
    for (i = 0; i<len_str; i++){
	str2_replace2 = str2_replace2 + '*';
    }
    
    str2_replace3 = str1.slice(index_str+len_str,1000);

    str2_replace = str2_replace1 + str2_replace2 + str2_replace3;
    
    console.log(str2_replace);
} else {
    console.log('подстрока не найдена');
}
