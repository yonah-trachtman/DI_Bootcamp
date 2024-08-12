class Person {
      private firstName: string;
      private lastName: string;
      public age: number;
      protected address: string;


      constructor(firstName: string, lastName: string, age: number, address: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.address = address;
          }

          public getFullName() {
                return `${this.firstName} ${this.lastName}`;
              }
    }


const me = new Person("Adam Yonah", "Trachtman", 26, "Sigaliyot")

console.log(me.getFullName());


interface Vehicle {
    make: string;
    model: string;
    start(): string;
}


interface Car extends Vehicle {
    numberOfDoors: number;
}


class Sedan implements Car {
    public make: string;
    public model: string;
    public numberOfDoors: number;

    constructor(make: string, model: string, numberOfDoors: number) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }

    start(): string {
        return `The ${this.make} ${this.model} is starting.`;
    }
}


const mySedan = new Sedan('Toyota', 'Camry', 4);
console.log(mySedan.start()); 
console.log(`Number of doors: ${mySedan.numberOfDoors}`); 


function combineObjects<T, U>(obj1: T, obj2: U): T & U {
    return {
        ...obj1,
        ...obj2,
    };
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

class Stack<T> {
    private items: T[] = [];


    push(element: T): void {
        this.items.push(element);
    }


    pop(): T | undefined {
        return this.items.pop();
    }


    isEmpty(): boolean {
        return this.items.length === 0;
    }
}


      
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); 
console.log(numberStack.isEmpty()); 

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop()); 
console.log(stringStack.isEmpty()); 


const emptyStack = new Stack<string>();
console.log(emptyStack.isEmpty());


function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
        return array.filter(predicate);
      }

const numbers = [1, 2, 3, 4, 5];
const isEven = (num: number) => num % 2 === 0;

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); 

const strings = ["apple", "banana", "cherry"];
const startsWithA = (str: string) => str.startsWith("a");

const aStrings = filterArray(strings, startsWithA);
console.log(aStrings);

