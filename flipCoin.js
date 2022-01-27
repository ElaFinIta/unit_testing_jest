'use strict';

const {createCoin} = require('./newPrivCoin');

const coinA = createCoin();
const coinB = createCoin();

console.log(coinA);
console.log(coinA.toString());
console.log(coinB.toString());
coinA.flip();
coinB.flip();
console.log(coinA.toString());
console.log(coinB.toString());
// cannot access dice object, will fail:
// console.log(coinA.dice.dots);