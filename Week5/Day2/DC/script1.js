
// Write a JavaScript program that recreates the pattern below.
for (let index = 1; index < 7; index++) {
    if (index == 1) {
        console.log("*");
    } else if (index == 2){
        console.log("**");
    } else if (index == 3){
        console.log("***");
    } else if (index == 4){
        console.log("****");
    } else if (index == 5){
        console.log("*****");
    } else if (index == 6){
        console.log("******");
    }
}
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
let pattern = "*"
for (let i = 1; i<7; i++) {
    for (let j = 0; j<=i; j++) {
        console.log(pattern.repeat(i));
    }
}

// Do this Daily Challenge by yourself, without looking at the answers on the internet.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *
