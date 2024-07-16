let url = "https://www.swapi.tech/api/people"
let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#home-world');


function updateWithLoading(){
    names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}

function errorFunction() {
    names.innerText = "Oh No! That person isnt available.";
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}

function updateCharacterData(data, planetData) {
    names.innerText = `Name: ${data.result.properties.name}`
    height.innerText = `Height: ${data.result.properties.height}`
    gender.innerText = `Gender: ${data.result.properties.gender}`
    birthYear.innerText = `Birth Year: ${data.result.properties.birth_year}`
    homeWorld.innerText = `Homeworld: ${planetData.result.properties.name}`
}

async function getText(file) {
    updateWithLoading();
    try {
        let response = await fetch(file);
        if (!response.ok) { 
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        let planet = await fetch(data.result.properties.homeworld);
        if (!planet.ok) { 
            throw new Error('Network response was not ok');
        }
        let planetData = await planet.json();
        updateCharacterData(data, planetData)   
    } catch (error) {
        errorFunction()
    }
}


button.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 83) + 1;
    getText(`${url}/${randomNumber}/`)
})
  