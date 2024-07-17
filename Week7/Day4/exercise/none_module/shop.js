//     Create another file named shop.js.

//     In shop.js, require the product objects from the products.js module.
const {products} = require("./products.js")
//     Create a function that takes a product name as a parameter and searches for the corresponding product object.
const findProduct = (productName) =>{
    for (let i = 0; i < products.length; i++) {
        if (productName == products[i].name) {
            console.log(products[i].name); 
        }
        
    }
}
//     Call this function with different product names and print the details of the products.
findProduct("Ravnica Booster pack")
//     Run shop.js and verify that the correct product details are displayed.
