// Instructions

// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

//     Create an array which value is the planets of the solar system.
const listPlanets = document.getElementsByClassName("listPlanets")

const solersystem = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus", 
    "Neptune",
    "Pluto"
]
//     For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (let index = 0; index < solersystem.length; index++) {
    let planet = document.createElement("div")
    planet.classList.add("planet")
//     Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
planet.classList.add(solersystem[index])
//     Finally append each div to the <section> in the HTML
listPlanets[0].appendChild(planet)
}
