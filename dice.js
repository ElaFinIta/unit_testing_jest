'use strict';

module.exports = class Dice{
    constructor(upperBound=6){  // if not given, upperBound will default to 6
        if(!Number.isInteger(upperBound)) {
            throw new Error('Upper bound must be an integer');
        }

        if(upperBound > 20) {
            throw new Error('Upper bound too big');
        }

        if(upperBound < 2) {
            throw new Error('Upper bound too small');
        }

        this.dotCount = 0;
        this.upperBound = upperBound;
    }

    get minimumValue(){  // this is a getter
        return 1;
    }

    get maximumValue() {  // this is a getter
        return this.upperBound;
    }

    get dots() {
        return this.dotCount;
    }

    roll() {
        // if it's 0 it will ceil it to 1
        this.dotCount = Math.ceil(Math.random() * this.upperBound)
    }
}