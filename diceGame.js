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

console.log(`Wins for A: ${wins.Awins}
Wins for B: ${wins.Bwins}
ties: ${wins.ties}`);