'use strict';

const Dice = require('./dice');

class Coin extends Dice  {
    constructor() {
        super(2);
    }

    flip() {
        this.roll();
    }

    toString() {
        if (this.dotCount === 0) {
            return 'Not flipped yet';
        }
        return this.dotCount === 1 ? 'heads' : 'tails';


        // !! alternative syntax, but this is wors ein readibility according to Ilkka !!
        // return this.dotCount === 0 ? 'Not flipped yet'
        //     : this.dotCount === 1 ? 'heads' : 'tails';
    }
} 


module.exposrts = {Coin};

// const coin = new Coin();
// console.log(coin);
// console.log(coin.toString());
// coin.flip();
// console.log(coin.toString());


// in alternative >>> making a class embedding dice but WITHOUT extending the Coin class
class Coin2 {
    constructor() {
        this.dice = new Dice(2);
        this.face = 0;
    }

    flip() {
        this.dice.roll();
        this.face = this.dice.dots
    }

    toString() {
        if (this.face === 0) {
            return 'Not flipped yet';
        }
        return this.face === 1 ? 'heads' : 'tails';
    }
}

const coin = new Coin2();
console.log(coin);
console.log(coin.toString());
coin.flip();
console.log(coin.toString());
// in JS you can still access dice from Coin2... don't do it. Javascript can't protect it. In other languages there are private classes
console.log('accessing dice, only in JS: ', coin.dice.dots); 