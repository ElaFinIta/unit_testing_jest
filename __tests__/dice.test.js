'use strict';

const Dice = require('../dice.js');

describe('Methods and getters defined', () => {
    const dice = new Dice();

    test('minimunValue defined', () => {
        expect(dice.minimumValue).toBeDefined();
    });

    test('minimumValue is 1', () => {
        expect(dice.minimumValue).toBe(1);
    });

    test('maximum value defined', () => {
        expect(dice.maximumValue).toBeDefined();
    });

    test('dots defined', () => {
        expect(dice.dots).toBeDefined();
    });

    test('roll defined', () => {
        expect(dice.roll).toBeDefined();
    });

    // test('toString defined', () => {  // always defined because is a class, no need to test
    //     expect(dice.toString).toBeDefined();
    // });
});

describe('Testing constructor', () => {
    describe('Create a dice with no upper bound given', () => {
        const dice = new Dice();
    
        test('maximumValue is 6', ()=> {
            expect(dice.maximumValue).toBe(6);
        });
        test('mainimumValue is 1', ()=> {
            expect(dice.minimumValue).toBe(1);
        });
        test('dots is 0', ()=> {
            expect(dice.dots).toBe(0);
        });
    });
    
    describe('Create a dice with upper bound 12', () => {
        const dice = new Dice(12);
    
        test('maximumValue is 12', ()=> {
            expect(dice.maximumValue).toBe(12);
        });
        test('mainimumValue is 1', ()=> {
            expect(dice.minimumValue).toBe(1);
        });
        test('dots is 0', ()=> {
            expect(dice.dots).toBe(0);
        });
    });
    
    describe('Create a dice with the given upper bound 2-20', () => {
        // array of arrays from 2 to 20
        const testCases = new Array(19).fill(2).map((value, ind) => [value + ind]);
    
        test.each(testCases)('test upper bound %s', upperBound => {
            const dice = new Dice(upperBound);
            expect(dice.maximumValue).toBe(upperBound);
        });
    });

    describe('Test exceptions', () => {
        const testValues = [
            ['s', 'Upper bound must be an integer'],
            [2.5, 'Upper bound must be an integer'],
            [1, 'Upper bound too small'],
            [-4, 'Upper bound too small'],
            [0, 'Upper bound too small'],
            [21, 'Upper bound too big'],
            [100, 'Upper bound too big'],
        ];
        
        test.each(testValues)('upper bound %s throws an exception %s', (ubound, expected) => {
            expect(() => new Dice(ubound)).toThrow(expected);
        })
    });

});


describe('Test method roll', () => {

    describe('test with default upper bound 6', () => {
        const dice = new Dice();
        test('test when rolled', () => {
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(6);
        });
    });

    describe('test with upper bound 12', () => {
        const dice = new Dice(12);
        test('test when rolled', () => {
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(12);
        });
    });

    describe('test a dice with upper bounds 2-20', () => {
        // array of arrays from 2 to 20
        const testCases = new Array(19).fill(2).map((value, ind) => [value + ind]);

        test.each(testCases)('test upper bounds from %s', upperBound => {
            const dice = new Dice(upperBound);
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(upperBound);
        })
    })
});

describe('Test method toString', () => {
    let dice;

    beforeEach(() => {
        dice = new Dice();
    });

    test('dice not rolled yet', () => {
        expect(dice.toString()).toBe('Not rolled yet');
    });

    test('dice rolled', () => {
        dice.roll();
        expect(dice.toString()).toBe(`${dice.dots}`);
    });
});