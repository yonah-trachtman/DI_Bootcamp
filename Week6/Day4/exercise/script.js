// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

//     Convert this JS object into a JSON object. What happens to the nested objects ? they become a string
const myJSON = JSON.stringify(marioGame); 
console.log(myJSON);
console.log(typeof myJSON)
//     Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
const myJSON2 = JSON.stringify(marioGame, null, 2); 
console.log(myJSON2);
//     Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
// '{"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},"bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},"princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}'


