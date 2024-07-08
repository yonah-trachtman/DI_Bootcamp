// Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

//     Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
const usernames = []
const getusername = (arr) => {
    usernames.push(`${arr.username}!`)
}
gameInfo.forEach(getusername)
console.log(usernames);
//     The new array should look like this :

//     const usernames = ["john!", "becky!", "susy!", "tyson!"]



//     2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
//     The new array should look like this :
let winners = []
const getwinners = (arr) => {
    arr.score > 5 ? winners.push(arr.username) : console.log("loser") 
}
gameInfo.forEach(getwinners)
console.log(winners);
//     const winners = ["becky", "susy"]



//     3. Find and display the total score of the users. (Hint: The total score is 71)
let totalscore = 0

const getTotalScore = (arr) => {
    totalscore += arr.score
}

gameInfo.forEach(getTotalScore)
console.log(totalscore);
