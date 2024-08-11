

console.log("hello world");
 
let age: number = 5
let Name: string = "Hornby"
let id: number | string

let someFunc: Function  = (num:number) => {
    if (num > 0) {
        console.log("positive")
    } else if (num < 0) {
        console.log("negitive")
    } else {
        console.log("zero")
    }
}


type SumFunc = (a: number|string, b: number|string) => number|string;

const add: SumFunc = (a, b) => {

    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
      return a + b;
    } else {
      throw new Error('Both parameters must be of the same type.');
    }
  };

console.log(add(5, 3));
console.log(add('Hello, ', 'world!'));
// console.log(add(5, 'world!'));


console.log(Name)
console.log(age)
someFunc(age)


function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old.`;

    return [name, age, greeting];
}


const [userName, userAge, message] = getDetails(Name, age);

 
console.log(message);  


type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return {
        name: name,
        age: age
    };
}

const person = createPerson(Name, age);

console.log(person.name);


let someValue: any = "NYEOOOOOOOOOM!";
let strLength: number = (someValue as string).length;

console.log(strLength); 

function getAction(role: string): string {
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


function greet(name: string): string;
function greet(): string;


function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'Hello, world!';
    }
}


console.log(greet('Alice')); 
console.log(greet());        

