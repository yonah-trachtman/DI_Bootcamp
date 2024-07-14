// 🌟 Exercise 1 : Comparison
// Instructions

//     Create a function called compareToTen(num) that takes a number as an argument.
//     The function should return a Promise:
//         the promise resolves if the argument is less than or equal to 10
//         the promise rejects if argument is greater than 10.
const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
          if (num <= 10) {
              resolve(num);
          } else {
              reject(num);
          }
      });
  }
  
  // Test:
  
  // In the example, the promise should reject
  compareToTen(15)
    .then(num => console.log(`${num} is less than or equal to 10`))
    .catch(num => console.log(`${num} is more than 10`))
  
  // In the example, the promise should resolve
  compareToTen(8)
    .then(num => console.log(`${num} is less than or equal to 10`))
    .catch(num => console.log(`${num} is more than 10`))





//     🌟 Exercise 2 : Promises
// Instructions

//     Create a promise that resolves itself in 4 seconds and returns a “success” string.

const success = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("“success”")
    }, 4* 1000);
})


success.then(function(value){console.log(value)})


// 🌟 Exercise 3 : Resolve & Reject
// Instructions

//     Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//     Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

let resolvePromise = new Promise((resolve, reject) => {
    resolve(3)
})

resolvePromise.then(function(value){console.log(value)})



let rejectPromise = new Promise((resolve, reject) => {
    reject("Boo!")
})


rejectPromise.catch(function(value){console.log(value)})