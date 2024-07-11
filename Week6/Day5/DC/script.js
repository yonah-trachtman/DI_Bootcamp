// Instructions

// Create a function that:

//     takes in two strings as two parameters
//     and returns a boolean that indicates whether or not the first string is an anagram of the second string.
const answer = document.getElementById("answer")
const checker = document.getElementById("checker")
const firstWord = document.getElementById("firstWord")
const lastWord = document.getElementById("secondWord")


function isAnogram(word1, word2) {
    let firstarr = word1.toLowerCase().split("")
    let secondarr = word2.toLowerCase().split("")
    let sortedWord1 = firstarr.sort().join('').trim()
    let sortedWord2 = secondarr.sort().join('').trim()
    if (sortedWord1 === sortedWord2) {
        answer.innerText = (`${word1} is an anagram of ${word2}`)
    } else {
        answer.innerText = (`${word1} is not an anagram of ${word2}`)
    }
}

checker.addEventListener("submit", function(e){
    e.preventDefault()
    isAnogram(firstWord.value, lastWord.value)
})

// Some Help

//     What is an anagram?
//     An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


//     Example of anagrams

//     "Astronomer" is an anagram of "Moon starer"
//     "School master" is an anagram of "The classroom"
//     "The Morse Code" is an anagram of "Here come dots"


//     Do we need to consider whitespace?
//     Trim whitespace prior to comparison.
