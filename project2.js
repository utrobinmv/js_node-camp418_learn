const readlineSync = require('readline-sync');

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const Monster = {
        maxHealth: 10,
        name: "Лютый",
        moves: [
            {
                "name": "Удар когтистой лапой",
                "physicalDmg": 3, // физический урон
                "magicDmg": 0,    // магический урон
                "physicArmorPercents": 20, // физическая броня
                "magicArmorPercents": 20,  // магическая броня
                "cooldown": 0     // ходов на восстановление
            },
            {
                "name": "Огненное дыхание",
                "physicalDmg": 0,
                "magicDmg": 4,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 3
            },
            {
                "name": "Удар хвостом",
                "physicalDmg": 2,
                "magicDmg": 0,
                "physicArmorPercents": 50,
                "magicArmorPercents": 0,
                "cooldown": 2
            },
        ]
}

const Mag = {
    maxHealth: 9,
    name: 'Евстафий',
    moves: [
            {
                "name": "Удар боевым кадилом",
                "physicalDmg": 2,
                "magicDmg": 0,
                "physicArmorPercents": 0,
                "magicArmorPercents": 50,
                "cooldown": 0
            },
            {
                "name": "Вертушка левой пяткой",
                "physicalDmg": 4,
                "magicDmg": 0,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 4
            },
            {
                "name": "Каноничный фаербол",
                "physicalDmg": 0,
                "magicDmg": 5,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 3
            },
            {
                "name": "Магический блок",
                "physicalDmg": 0,
                "magicDmg": 0,
                "physicArmorPercents": 100,
                "magicArmorPercents": 100,
                "cooldown": 4
            },
	    ]
}

//let fruit = prompt("Какой фрукт купить?", "apple");

Mag.health = Mag.maxHealth;
Monster.health = Monster.maxHealth;

for (move in Mag.moves) {
    Mag.moves[move].coolup = Mag.moves[move].cooldown;
}

for (move in Monster.moves) {
    Monster.moves[move].coolup = Monster.moves[move].cooldown;
}

do {
    
    for (move in Mag.moves) {
	Mag.moves[move].coolup = Mag.moves[move].coolup + 1;
    }

    for (move in Monster.moves) {
	Monster.moves[move].coolup = Monster.moves[move].coolup + 1;
    }
    
    console.log('Готовимся к удару');
    console.log('Компьютер: ' + Monster.name + ', Здоровье: ' + Monster.health);
    console.log('Вы: ' + Mag.name + ', Здоровье: ' + Mag.health);

    do {
	compDeystvie = getRandomInt(0,3);
	monsterMove = Monster.moves[compDeystvie];
    } while (monsterMove.coolup < monsterMove.cooldown);
    

    console.log(Monster.name + " хочет совершить " + monsterMove.name);

    console.log('Какое действие совершите вы ' + Mag.name + ':');

    for(i in Mag.moves) {

	magMove = Mag.moves[i];

	if (magMove.coolup >= magMove.cooldown) {
	    console.log(i + ') '+ magMove.name); 
	}
	
    }
    
    let userOtvet = readlineSync.question('Ваше действие: ');

    magMove = Mag.moves[userOtvet];
    
    console.log("Вы выбрали действие: " + magMove.name);
    
    console.log('Бой начался...');
    console.log('...............');
    console.log('...............');
    console.log('...............');
    console.log('...............');
    console.log('...............');

    //Расчет удара монстра
    monsterPhysicalDmg = monsterMove.physicalDmg - (monsterMove.physicalDmg * magMove.physicArmorPercents / 100);
    monsterMagicDmg = monsterMove.magicDmg - (monsterMove.magicDmg * magMove.magicArmorPercents / 100);

    monsterDmg = monsterPhysicalDmg + monsterMagicDmg;

    console.log("Сила удара Монстра " + monsterDmg);
    
    //Расчет удара мага
    magPhysicalDmg = magMove.physicalDmg - (magMove.physicalDmg * monsterMove.physicArmorPercents / 100);
    magMagicDmg = magMove.magicDmg - (magMove.magicDmg * monsterMove.magicArmorPercents / 100);

    magDmg = magPhysicalDmg + magMagicDmg;

    console.log("Сила удара Мага " + magDmg);
    
    Mag.health = Mag.health - monsterDmg;
    Monster.health = Monster.health - magDmg;

    magMove.coolup = 0;
    monsterMove.coolup = 0;
        
} while (Mag.health > 0 && Monster.health > 0)

if (Mag.health <= 0 && Monster.health <= 0) {
    console.log("К сожалению последний бой был для обоих сторон плачевным! Вы оба мертвы!");
} else if (Mag.health <= 0) {
    console.log("Вы проиграли, Компьютер победил!");
} else {
    console.log("Ура! Победа!!!");
}
