// 🌟 Exercise 1: Multiple Exports and Import using CommonJS syntax
// Instructions

//     Create a file named products.js.

//     Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

const products = [{name: "Ravnica Booster pack", price: 4.99, category: "TCG"}, {name: "Card Sleeves X100", price: 1.99, category: "Extra"}, {name: "Everdell", price: 50, category: "BoardGame"}]

//     Export this array using the Common JS syntax.
module.exports = {
    products
}
