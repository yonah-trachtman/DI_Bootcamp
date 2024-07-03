// Instructions

// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :
const form = document.getElementById("libform")
const noun = document.getElementById("noun")
const adjective = document.getElementById("adjective")
const person = document.getElementById("person")
const verb = document.getElementById("verb")
const place = document.getElementById("place")
const story = document.getElementById("story")

//     Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
function madlib(e) {
    e.preventDefault()
    let nountext;
    let adjectivetext;
    let persontext;
    let verbtext;
    let placetext;
    if(noun.value.trim() === ""){
        alert('Please put a valid input');
      } else {
        nountext = noun.value.trim()
      }
    if(adjective.value.trim() === ""){
        alert('Please put a valid input');
      } else {
        adjectivetext = adjective.value.trim()
      }
    if(person.value.trim() === ""){
        alert('Please put a valid input');
      } else {
        persontext = person.value.trim()
      }
    if(verb.value.trim() === ""){
        alert('Please put a valid input');
      } else {
        verbtext = verb.value.trim()
      }
    if(place.value.trim() === ""){
        alert('Please put a valid input');
      } else {       
        placetext = place.value.trim()
      }

    story.innerHTML = `
    here is the "story" 
    ${nountext}: this is the noun
    ${adjectivetext}: this is the adjective
    ${persontext}: this is the person
    ${verbtext}: this is the verb
    ${placetext}: this is the place
    `

}

form.addEventListener("submit", madlib, false)
//     Make sure the values are not empty
//     Write a story that uses each of the values.
//     Make sure you check the console for errors when playing the game.


