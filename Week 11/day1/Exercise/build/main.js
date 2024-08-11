"use strict";
console.log("hello world");
let age = 5;
let Name = "Hornby";
let id;
let someFunc = (num) => {
    if (num > 0) {
        console.log("positive");
    }
    else if (num < 0) {
        console.log("negitive");
    }
    else {
        console.log("zero");
    }
};
const add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else {
        throw new Error('Both parameters must be of the same type.');
    }
};
console.log(add(5, 3));
console.log(add('Hello, ', 'world!'));
// console.log(add(5, 'world!'));
console.log(Name);
console.log(age);
someFunc(age);
function getDetails(name, age) {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}
const [userName, userAge, message] = getDetails(Name, age);
console.log(message);
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
const person = createPerson(Name, age);
console.log(person.name);
let someValue = "NYEOOOOOOOOOM!";
let strLength = someValue.length;
console.log(strLength);
function getAction(role) {
    switch (role) {
        case 'admin':
            return 'Access to all features and settings';
        case 'editor':
            return 'Can edit and publish content';
        case 'viewer':
            return 'Can view content only';
        case 'guest':
            return 'Limited access, please register';
        case 'superuser':
            return 'Access to advanced features and debugging tools';
        default:
            return 'Unknown role, no access';
    }
}
console.log(getAction('superuser'));
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return 'Hello, world!';
    }
}
console.log(greet('Alice'));
console.log(greet());
