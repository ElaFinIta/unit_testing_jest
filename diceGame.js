'use string';

const Dice = require('./dice');

const diceA = new Dice();
const diceB = new Dice();

console.log('diceA:', diceA.toString());
console.log('diceB: ' + diceB);  // diceB is string because added to string
console.log(`Dice B status: ${diceB}`);

diceA.roll();
diceB.roll();

console.log('dice A dots: ', diceA.dots);
console.log('dice A dots: ' + diceB.toString());
console.log(`dice B dots: ${diceB}`);


const wins = {
    Awins: 0,
    Bwins: 0,
    ties: 0
}

for (let i=0; i < 10; i++) {
    diceA.roll();
    diceB.roll();

    if (diceA.dots === diceB.dots) {
        console.log('same dots');
        wins.ties++;
    }
    else if (diceA.dots > diceB.dots) {
        console.log('A wins');
        wins.Awins++;
    }
    else {
        console.log('B wins');
        wins.Bwins++;
    }
}


// console.log(wins);
console.log(`Wins for A: ${wins.Awins}
Wins for B: ${wins.Bwins}
ties: ${wins.ties}`);

// flip a coin with a dice of uppebound 2
const coin = new Dice();
coin.roll();
console.log(`\nCoin flip result: ${coin.dots === 1 ? 'heads' : 'tails'}\n`);


// array of dice
const diceArray = [new Dice(), new Dice(), new Dice()];
diceArray.forEach(dice => console.log(dice.toString()));
diceArray.forEach(dice => dice.roll());
diceArray.forEach(dice => console.log(dice.toString()));

// reduce((previousValue, currentValue) => { /* ... */ } )
const result = diceArray.reduce((sum, dice) => sum+dice.dots, 0);
console.log(`\nSum of dots is ${result}`);