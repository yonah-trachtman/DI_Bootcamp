const url = "http://localhost:5000/emojis";
const randomEmoji = document.getElementById('emoji')
const currentScore = document.getElementById("score")
const submit = document.getElementById("submit")
const guess = document.getElementById("guess")
const outcome = document.getElementById("outcome")
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const fourth = document.getElementById("fourth")
const fifth = document.getElementById("fifth")
let newScore = 1
let emojiName = ""
let leaderBoard = [10, 10, 10, 10, 10];
let placement = [first, second, third, fourth, fifth]

const emojis = () => {
  fetch(url)
    .then((res) => res.json())
    .then((emojis) => {

      randomEmoji.innerHTML = emojis.randomEmoji.emoji
      emojiName = emojis.randomEmoji.name.toLowerCase()
    })
    .catch((e) => {
      console.log(e);
    });
};

function sorter(a, b){
  return a - b;
}

const makeGuess = (e) => {
e.preventDefault()
if (guess.value.toLowerCase() == emojiName) {
  leaderBoard.push(parseFloat(currentScore.innerText))
  leaderBoard.sort(sorter)
  leaderBoard.pop()
for (let i = 0; i < 5; i++) {
  placement[i].innerText = leaderBoard[i]
}
currentScore.innerText = 0
newScore = 1
outcome.innerText = "Congratulations! 🎉 Your guess is correct! 😊"
emojis()
} else {
  currentScore.innerText = newScore
  newScore += 1
  outcome.innerText = "Oops! 😢 Your guess is incorrect. Try again!"
}

}
emojis()
submit.addEventListener("submit", function (e) {
  makeGuess(e)
})