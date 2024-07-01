// 🌟 Exercise 1 : List of people
// Instructions

const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review about arrays

//     Write code to remove “Greg” from the people array.
people.shift();

//     Write code to replace “James” to “Jason”.
let james = people.indexOf("James");
people[james] = "Jason"


//     Write code to add your name to the end of the people array.
people.push("Adam Yonah");

//     Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))

//     Write code to make a copy of the people array using the slice method.
//         The copy should NOT include “Mary” or your name.
copyOfPeople = people.slice(1, 3)
//         Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//         Hint: Check out the documentation for the slice method

//     Write code that gives the index of “Foo”. Why does it return -1 ?
//     because "foo" is not present in the array
console.log(people.indexOf("foo"))
//     Create a variable called last which value is the last element of the array.
let last = people[people.length - 1]
//     Hint: What is the relationship between the index of the last element in the array and the length of the array?


// Part II - Loops

//     Using a loop, iterate through the people array and console.log each person.

for(let person of people) {
    console.log(person);
}

//     Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
for(let person of people) {
    console.log(person);
    if (person == "Devon") {
        break
    }
}
//     Hint: take a look at the break statement in the lesson.






// 🌟 Exercise 2 : Your favorite colors
// Instructions

//     Create an array called colors where the value is a list of your five favorite colors.
const colors = ["Silver", "Yellow", "Grey", "Green"]
//     Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(let i = 0; i < colors.length; i++) {
console.log(`My #${i + 1} choice is ${colors[i]}`)
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
const place = ["1st", "2nd", "3rd", "4th"]
for(let i = 0; i < colors.length; i++) {
    console.log(`My ${place[i]} choice is ${colors[i]}`)
    }
// Hint : create an array of suffixes to do the Bonus



// 🌟 Exercise 3 : Repeat the question
// Instructions

//     Prompt the user for a number.
//     Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let userNumber = 0
do {
    let numberChoice = prompt("Please enter a number", 0);
    userNumber = Number(numberChoice);
  }
  while (userNumber < 10);
//     While the number is smaller than 10 continue asking the user for a new number.

//     Tip : Which while loop is more relevant for this situation?


// 🌟 Exercise 4 : Building Management
// Instructions:

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Review about objects

//     Copy and paste the above object to your Javascript file.

//     Console.log the number of floors in the building.

console.log(building.numberOfFloors);

//     Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);

//     Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

//     Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

console.log(building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1] > building.numberOfRoomsAndRent.dan[1]);



// 🌟 Exercise 5 : Family
// Instructions

//     Create an object called family with a few key value pairs.

const family = {
    father: "Mike",
    mother : "Dian",
    brother: "Jake",
    sister: "Rose"
}

//     Using a for in loop, console.log the keys of the object.
const familyKeys = Object.keys(family)
for(let key of familyKeys) {
    console.log(key);
}
//     Using a for in loop, console.log the values of the object.
for(let value in family) {
    console.log(family[value]);
}


// Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
newSentance = []
//     Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
for(let value in details) {
    newSentance.push(`${value} ${details[value]}`);
}
console.log(newSentance.join(" "))



// Exercise 7 : Secret Group
// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

//     A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
const firstLetter = [];
for (let i = 0; i < names.length; i++) {
    firstLetter.push(names[i][0])
}
//     Hint: a string is an array of letters
//     Console.log the name of their secret society. The output should be “ABJKPS”
firstLetter.sort();
console.log(firstLetter.join(''));