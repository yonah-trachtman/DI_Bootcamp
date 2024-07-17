//     Create another file named app.js.
import { people } from "./data.js";

//     In app.js, import the array of person objects from the data.js module.

//     Write a function that calculates and prints the average age of all the persons in the array.
const averageAge = () => {
    let totalAge = 0;
    for (let i = 0; i < people.length; i++) {
        totalAge += people[i].age;
    }
    const averageAge = totalAge / people.length;
    console.log(`the average age is ${averageAge}`)
}
//     Use the imported array and the average age function in app.js.
averageAge()
//     Run app.js and confirm that the average age is correctly calculated and displayed.
