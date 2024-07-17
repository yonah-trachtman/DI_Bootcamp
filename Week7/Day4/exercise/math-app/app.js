//     Create a file named app.js in the same directory.

//     In app.js, require the lodash package and the custom math module.
var _ = require('lodash');
const {add,  multiply} = require("./math.js")
//     Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
const numbers = [1, 2, 3, 4, 5];


const sum = _.sum(numbers);
console.log('Sum:', sum);

const additionResult = add(10, 20);
console.log('Addition Result:', additionResult);

const multiplicationResult = multiply(10, 20);
console.log('Multiplication Result:', multiplicationResult);


const mean = _.mean(numbers);
const meanPlusFive = add(mean, 5);
console.log('Mean Plus Five:', meanPlusFive);
//     Run app.js using Node.js and verify that the calculations are correct.
