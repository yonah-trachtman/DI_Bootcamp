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


