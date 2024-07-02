// 🌟 Exercise 1 : Find the numbers divisible by 23
// Instructions

//     Create a function call displayNumbersDivisible() that takes no parameter.


function displayNumbersDivisible() {
    let numbers = []
    sumOfNumbers = 0
    for (let index = 0; index < 501; index++) {
        if (index % 23 == 0){
            console.log(index);
            numbers.push(index)
        }
    }
    for (let index = 0; index < numbers.length; index++) {
        sumOfNumbers += numbers[index]
    }
    console.log(sumOfNumbers);
}
displayNumbersDivisible()

//     In the function, loop through numbers 0 to 500.

//     Console.log all the numbers divisible by 23.

//     At the end, console.log the sum of all numbers that are divisible by 23.

//     Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
//     368 391 414 437 460 483
//     Sum : 5313




// 🌟 Exercise 2 : Shopping List
// Instructions

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//     Add the stock and prices objects to your js file.

//     Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"]
//     Create a function called myBill() that takes no parameters.
myBill = (arr) => {
    totalPrice = 0
    for (let index = 0; index < arr.length; index++) {
         if (arr[index] in stock && stock[arr[index]] > 0) {
            console.log(`${arr[index]} costs ${prices[arr[index]]}`)
            totalPrice += prices[arr[index]]
         } 
        
    }
    console.log(totalPrice)
  } 


//     The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//         The item must be in stock. (Hint : check out if .. in)
//         If the item is in stock find out the price in the prices object.
myBill(shoppingList)
//     Call the myBill() function.




// Exercise 3 : What’s in my wallet ?
// Instructions

// Note: Read the illustration (point 4), while reading the instructions

//     Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//         an item price
//         and an array representing the amount of change in your pocket.
function changeEnough(itemPrice, amountOfChange) {
    sumOfChange = 0
    for (let index = 0; index < amountOfChange.length; index++) {
        if (index == 0) {
            sumOfChange += amountOfChange[index] * 0.25
        } else if (index == 1) {
            sumOfChange += amountOfChange[index] * 0.10
        } else if (index == 2) {
            sumOfChange += amountOfChange[index] * 0.05
        } else {
            sumOfChange += amountOfChange[index] * 0.01
        }
        
    }
    console.log(sumOfChange)
    console.log(itemPrice <= sumOfChange);
}
//     In the function, determine whether or not you can afford the item.
//         If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
//         If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

//     Change will always be represented in the following order: quarters, dimes, nickels, pennies.

//     A quarters is 0.25
//     A dimes is 0.10
//     A nickel is 0.05
//     A penny is 0.01



//     4. To illustrate:

// After you created the function, invoke it like this:

changeEnough(4.25, [25, 20, 5, 0])

//     The value 4.25 represents the item’s price
//     The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
//     The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

changeEnough(14.11, [2,100,0,0]) 
changeEnough(0.75, [0,0,20,5]) 


// 🌟 Exercise 4 : Vacations Costs
// Instructions

// Let’s create functions that calculate your vacation’s costs:

//     Define a function called hotelCost().
//         It should ask the user for the number of nights they would like to stay in the hotel.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         The hotel costs $140 per night. The function should return the total price of the hotel.


function hotelCost() {
   do {
    userInput = prompt("please give us a number of nights they would like to stay in the hotel")
    numberOfDays = Number(userInput)
   } while (isNaN(numberOfDays) === true || userInput <= 0);
   return userInput *= 140
}
//     Define a function called planeRideCost().
//         It should ask the user for their destination.
//         If the user doesn’t answer or if the answer is not a string, ask again.
//         The function should return a different price depending on the location.
//             “London”: 183$
//             “Paris” : 220$
//             All other destination : 300$


function planeRideCost() {
    do {
        destination = prompt("please give us the destination you wish to go to");
    } while (typeof destination !== "string" || destination.length <= 1);
    if (destination == "London") {
        return 183
    } else if (destination == "Paris") {
        return 220
    } else {
        return 300
    }
}

//     Define a function called rentalCarCost().
//         It should ask the user for the number of days they would like to rent the car.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         Calculate the cost to rent the car. The car costs $40 everyday.
//             If the user rents a car for more than 10 days, they get a 5% discount.
//         The function should return the total price of the car rental.


function rentalCarCost() {
    do {
        numberOfDays = prompt("please give us a number of nights they would like to stay in the hotel")
        numberOfDays = Number(numberOfDays)
       } while (isNaN(numberOfDays) === true || userInput <= 0);
       total = numberOfDays *= 40
       if (numberOfDays >= 10) {
         return total *= 0.05
       }
}



//     Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//     Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
    let hotel = hotelCost()
    let plane = planeRideCost()
    let car = rentalCarCost()

    total = hotel + plane + car
    console.log(`the total cost is ${total}$`)
}


totalVacationCost()







// Exercise 7 : My Book List
// Instructions

// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

//     In the body of the HTML page, create an empty section:
//     <section class="listBooks"></section>

//     In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//         title,
//         author,
//         image : a url,
//         alreadyRead : which is a boolean (true or false).

//     Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

//     Requirements : All the instructions below need to be coded in the js file:
//         Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
//         For each book :
//             You have to display the book’s title and the book’s author.
//             Example: HarryPotter written by JKRolling.
//             The width of the image has to be set to 100px.
//             If the book is already read. Set the color of the book’s details to red.
