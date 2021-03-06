'use strict';

const ubounds = [];
for (let i=2; i<=20; i++) {
    ubounds.push([i]);
}

console.log(ubounds);

const temp = new Array(19).fill(2);
console.log(temp);

const mapped = temp.map(value => value + 5);
console.log(mapped);

// ind is index, starting from 0
const mappedWithInc = temp.map((value, ind) => [value+ind]);
console.log(mappedWithInc);

// one liner:
const bounds = new Array(19).fill(2).map((value, ind) => [value + ind]);
console.log(bounds);