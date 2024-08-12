"use strict";
class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const me = new Person("Adam Yonah", "Trachtman", 26, "Sigaliyot");
console.log(me.getFullName());
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        return `The ${this.make} ${this.model} is starting.`;
    }
}
const mySedan = new Sedan('Toyota', 'Camry', 4);
console.log(mySedan.start());
console.log(`Number of doors: ${mySedan.numberOfDoors}`);
function combineObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = {
    name: "Alice",
    age: 30,
};
const employee = {
    employeeId: 1234,
    department: "Engineering",
};
const combined = combineObjects(person, employee);
console.log(combined);
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
console.log(numberStack.isEmpty());
const stringStack = new Stack();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop());
console.log(stringStack.isEmpty());
const emptyStack = new Stack();
console.log(emptyStack.isEmpty());
function filterArray(array, predicate) {
    return array.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);
const strings = ["apple", "banana", "cherry"];
const startsWithA = (str) => str.startsWith("a");
const aStrings = filterArray(strings, startsWithA);
console.log(aStrings);
