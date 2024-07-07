let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

//     Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
let displayGroceries = (arr) => {
    arr.forEach(function(n){console.log(n)});    
}

// displayGroceries(groceries["fruits"])
//     Create another arrow function named cloneGroceries.

const cloneGroceries = () => {
    let user = client
    client = "Betty"
    console.log(client)
    console.log(user)

    let shopping = groceries
    shopping.totalPrice = "35$"
    shopping.other.paid = false
    console.log(shopping)
    console.log(groceries)
}
//         In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
//             Change the client variable to “Betty”. Will we also see this modification in the user variable ? no Why ? because that is passed by a primitive value
//         In the function, create a variable named shopping that is equal to the groceries variable.
//             Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? yes Why ? 
// because unlike the previous example shopping and groceries are both object veriables which pass by referance, ie the information is saved in the program and both are pulling from that same information
//             Change the value of the paid key to false. Will we also see this modification in the shopping object ? yes Why ? for the same reason as stated above

//     Invoke the cloneGroceries function.

cloneGroceries()