'use strict';

const Dice = require('./dice');

// from outside this class we cannot access dice object directly
// but we can access it from inside the class to make functions
function createCoin() {
    const dice = new Dice(2);

    class Coin {
        constructor() {
            this.face = 0;
        }
        get side() {
            return this.face;
        }
        flip(){
            // we access dice here but we wont be able to access dice from outside the class. So we wont be able to do coinZ.roll()
            dice.roll();
            this.face = dice.dots;
        }

        toString() {
            if (this.face === 0) {
                return 'Not flipped yet';
            }
            return this.face=== 1 ? 'heads' : 'tails';
        }
    } // end of class
    return new Coin();
}

const coinZ = createCoin();
console.log(coinZ.toString());
coinZ.flip();
// logginb directly coinZ.flip() will give undefined: flip first and then lok
console.log(coinZ);
console.log(coinZ.toString());


module.exports = {createCoin}