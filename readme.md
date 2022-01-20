
# Unit testing with Jest

A practise project to learn Jest

##  Dice class (API)

This is a Dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). The maximum upper bound is 20. The minimum upper bound is 2. If the dice hans-t been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't became zero again.

## Operations

### **constructor(upperBound)**

- Initializes the dice with upperBound that is passed as a parameter
- if no upperBound is given, the dafault upper bound is 6
- initializes dot count to 0

- if upperBound is not an integer, throw an exception `'upper bound must be an integer'`

- if upperBound is not an between 2 and 20, an exception is thrown:
    - upperBound > 20: `'Upper bound too big'`
    - upperBound <2: `'Upper bound too small'`

### Methods

#### **roll()**

 - roll the dice
 - when rolled, the dot count become a random number between 1 and upper bound (included)

 #### **toString()**

 -return dot count as a string. For example `'4'`
- if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

### Getters

#### **dots**

- return the numbers fo dots

#### **minimumValue**
- return the minimum number of dots. It should be 1.

#### **maximumValue**
- return the upper bound of dots. It should be 20.

### Screenshots

![screenshot](screenshot2.png?raw=true "test run")
![screenshot](screenshot1.png?raw=true "run test")