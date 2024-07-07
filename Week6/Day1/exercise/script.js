// 🌟 Exercise 1 : Scope
// Instructions



//     Analyse the code below, and predict what will be the value of a in all the following functions.
//     Write your prediction as comments in a js file. Explain your predictions.

// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? : We will get an error due to it being a constant function


// //#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? : we'll get 0 than an error


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
// a will equal to hello

// //#4
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ? : You will get test as it treats a as a new variable

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ? : once again they're considered differant values


// ////////////
// 🌟 Exercise 2 : Ternary operator
// Instructions

// Using the code below:

// let winBattle = () => true;


// //     Transform the winBattle() function to an arrow function.
// //     Create a variable called experiencePoints.

// let experiencePoints = winBattle() ? 10 : 1
// //     Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// //     Console.log the experiencePoints variable.
// console.log(experiencePoints)



// 🌟 Exercise 3 : Is it a string ?
// Instructions

//     Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
//     Check out the example below to see the expected output

// let isString = (userInput) => {
//     if (typeof userInput == "string") {
//         return true
//     } else {
//         return false
//     }
// }

// // Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false




// 🌟 Exercise 4 : Find the sum
// Instructions

//     Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// let sum = (a,b) => a + b

// console.log(sum(12,45))



// 🌟 Exercise 5 : Kg and grams
// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//     First, use function declaration and invoke it.
// function KGtoG(weight) {
//     return weight * 1000
// }

//     Then, use function expression and invoke it.KGtoG (3)
// const KGtoG = function (weight) {return weight * 1000};


//     Write in a one line comment, the difference between function declaration and function expression.
//  the function expression is more concise but can't be invoked before the line it's created
//     Finally, use a one line arrow function and invoke it.

// const KGtoG = weight => weight * 1000

// console.log(KGtoG (3))



// 🌟 Exercise 6 : Fortune teller
// Instructions

//     Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// (function (children, partner, location, job) {
//     const para = document.createElement("p");
//     para.innerText = `You will be a ${job}
//     in ${location},
//     and married to ${partner}
//     with ${children} kids.`;
//     document.body.appendChild(para);
//   })(2.5, "Sarah", "Villa Santo Stefano", "Cashier");
//     The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


// 🌟 Exercise 7 : Welcome
// Instructions

// John has just signed in to your website and you want to welcome him.

//     Create a Navbar in your HTML file.
//     In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//     The function should add a div in the nabvar, displaying the name of the user and his profile picture.


// (function (name) {
//     const nabvar = document.getElementById("navbar")
//     const div = document.createElement("div")
//     const para = document.createElement("p")
//     para.innerText = name
//     const img = document.createElement("img")
//     img.src = "images.png"
//     div.style.display = "flex"
//     div.append(para, img)
//     nabvar.append(div)
//       })("john smith");


// 🌟 Exercise 8 : Juice Bar
// Instructions

// You will use nested functions, to open a new juice bar.
// Part I:

//     The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// function makeJuice(size) {
//   const arr = []
    
//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//       arr.push(ingredient1, ingredient2, ingredient3)
//     }
//     addIngredients("banana", "blueberry", "coconut")
//     addIngredients("mango", "kiwi", "pineapple")
//     function displayJuice() {
//       const para = document.createElement("p")
//       para.innerText = `The client wants a ${size} juice, containing ${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]}, and ${arr[5]}`
//       document.body.append(para)
// }
// displayJuice()
// }
// //     The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// const juice = makeJuice("Large")
//     Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:

//     In the makeJuice function, create an empty array named ingredients.

//     The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

//     Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

//     The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


