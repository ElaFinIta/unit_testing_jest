# Test cases for the Dice class

## Test cases for the constructor

- upperBound 2: dots 1,2
- upperBound 3: dots 1,2,3
- upperBound 7: dots 1,2,3,4,5,6,7


- new Dice('2') `'Upper bound must be an integer'`
- new Dice(2.5) `'Upper bound must be an integer'`

#### test with all upper bounds 2... 20
- new Dice(2) creates Dice with upper bound 2
- new Dice() creates Dice with upper bound 6
- new Dice(12) creates Dice with upper bound 12
- new Dice(6) creates Dice with upper bound 6
- new Dice(20) creates Dice with upper bound 20


- check that dot count is set to 0

- new Dice(21) throw `'Upper bound too big'`
- new Dice(100) throw `'Upper bound too big'`

- new Dice(-4) throw `'Upper bound too small'`
- new Dice(1) throw `'Upper bound too small'`

## test cases for roll

- dice = new dice(upperBound);
- dice.roll();
- check if 1 < dot count < upperBound

- dice = newDice();
- dice.roll();
- check if 1< dot count < 6

## test cases for toString()

- roll the dice and then compare the dots to the string returned from toString method:

    - dice = new Dice();
    - dice.roll();
    - expect(dice.toString()).toBe(`${dice.dots}`)

- if not rolled yet, then should return text `'Not rolled yet'`:
    - dice = new Dice();
    expect(dice.toString()).toBe(`'Not rolled yet'`);



