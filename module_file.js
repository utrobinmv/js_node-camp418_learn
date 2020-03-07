const fs = require('fs');
const path = require('path');

const fullFileName = '/home/joefox/data/nextcloud/Programming/NodeJS/project1/voprosy/vopros01.txt';

fs.open(fullFileName, 'r', (err, fd) => {

    
    if(err) {

	console.log('Файл не получен - Ошибка');
	
	console.error(err);
	return;
    }
    
    //fd - это дескриптор файла

    console.log('Файл получен');

    fs.stat(fullFileName, (err,stats) => {

	console.log('Статистика получена!');
	
	if(err) {
	    console.log('Ошибка чтения статистики');
	    console.error(err);
	    return;
	}

	//сведения о файле содержатся в аргументе `stats`

	if(stats.isFile()) {
	    console.log('Это файл!');
	}

	if(stats.isDirectory()) {
	    console.log('Это каталог!');
	}

	if(stats.isSymbolicLink()) {
	    console.log('Это символическая ссылка!');
	}
	
	console.log('Размер файла в байтах = ' + stats.size);

	console.log('Имя каталога: ' + path.dirname(fullFileName));
	console.log('Имя файл без каталога: ' + path.basename(fullFileName));
	console.log('Имя расширения файл: ' + path.extname(fullFileName));
	console.log('Имя файла без расширения: ' + path.basename(fullFileName, path.extname(fullFileName)));

	console.log('Абсолютный путь к файлу из относительного: ' + path.resolve(fullFileName));
	console.log('Абсолютный путь к файлу из имени файла: ' + path.resolve('myfile.txt'));

	console.log('Нормализация пути файл содержащего . или ..: ' + path.normalize('/users/flavio/..//test.txt'));
	
	console.log('Соединение частей имени файла: ' + path.join('/','users','path','path2','file.rar'));

	fs.readFile(fullFileName, (err, data) => {

    	    console.log('Файл прочитан!');
	
	    if(err) {
		console.log('Ошибка чтения файла');
		console.error(err);
		return;
	    }

	    console.log('Вывод содержимого файла');
	    console.log(data);

	})

	const content = 'Some content!'
	fs.writeFile('test.txt', content, (err) => {
	    if (err) {
		console.error(err)
		return;
	    }
	    //файл записан успешно

	    console.log('Файл записан успешно');
	})

	fs.appendFile('test.txt', content, (err) => {
	    if (err) {
		console.error(err)
		return;
	    }

	    console.log('Успешно добавлено к файлу');
	})
	

	
    })

    console.log('Выполнение после получения статистики!');
    
    
  })

console.log('Конец');

//Работа с папками

const folderName = 'TestFolder';

try {
  if (!fs.existsSync(folderName)){
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}

console.log('Папка создана');

fs.readdirSync(folderName).map(fileName => {
    console.log(fileName);
    return path.join(folderName, fileName) //перебираем файлы

})
