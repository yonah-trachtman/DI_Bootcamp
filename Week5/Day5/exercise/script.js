
// Project Brief

// Welcome to Coloring Squares.

// Your task is to build a coloring game similar to the working project above.

// You will need to use HTML, CSS and JS to accomplish this task.
// A few things to think about…

//     HTML, CSS:
//         How will you make the grid of colors?
//         How will you make the grid of blank squares?
//         Hint… GRID :P

//     JS:
//         How does a user choose a color?
//         How does drawing work? How can you tell when the user is clicking and dragging?
//         Hint, look at the JS events mousedown, mouseup, and mouseover.
const canves = document.getElementById("canvas")
const paint = document.getElementById("colors")
let color = "white"
const btn = document.getElementById("btn")
let mousedown = false

document.body.addEventListener("mousedown", function (){
    mousedown = true
})
document.body.addEventListener("mouseup", function (){
    mousedown = false
})

for (let index = 0; index < 2000; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell")
    canves.appendChild(cell);
    cell.addEventListener("mousedown", function(){
        cell.style.backgroundColor = color
    })
    cell.addEventListener("mouseover", function(){
        if (mousedown == true){
        cell.style.backgroundColor = color
    }
    })
}
const cells = document.getElementsByClassName("cell")
const cellslength = cells.length

for (let index = 0; index < 21; index++) {
    const palet = document.createElement("div");
    palet.classList.add("palet")
    paint.appendChild(palet);
    switch(index){
        case 0:
        palet.style.backgroundColor = "#FF0000"
        break
        case 1:
        palet.style.backgroundColor = "#FF4500"
        break
        case 2:
        palet.style.backgroundColor = "#FFA500"
        break
        case 3:
        palet.style.backgroundColor = "#FFFF00"
        break
        case 4:
        palet.style.backgroundColor = "#9ACD32"
        break
        case 5:
        palet.style.backgroundColor = "#90EE90"
        break
        case 6:
        palet.style.backgroundColor = "#008000"
        break
        case 7:
        palet.style.backgroundColor = "#40E0D0"
        break
        case 8:
        palet.style.backgroundColor = "#00FFFF"
        break
        case 9:
        palet.style.backgroundColor = "#87CEFA"
        break
        case 10:
        palet.style.backgroundColor = "#1E90FF"
        break
        case 11:
        palet.style.backgroundColor = "#0000FF"
        break
        case 12:
        palet.style.backgroundColor = "#00008B"
        break
        case 13:
        palet.style.backgroundColor = "#4B0082"
        break
        case 14:
        palet.style.backgroundColor = "#8B008B"
        break
        case 15:
        palet.style.backgroundColor = "#EE82EE"
        break
        case 16:
        palet.style.backgroundColor = "#FFB6C1"
        break
        case 17:
        palet.style.backgroundColor = "#D3D3D3"
        break
        case 18:
        palet.style.backgroundColor = "#808080"
        break
        case 19:
        palet.style.backgroundColor = "#000000"
        break
        case 20:
        palet.style.backgroundColor = "#FFFFFF"
        break

    }
    

}
const palet = document.getElementsByClassName("palet")
const paletLength = palet.length
for (let index = 0; index < paletLength; index++) {
    palet[index].addEventListener("click", function () {
        color = palet[index].style.backgroundColor
        console.log(color)
    })
}

function clear() {
    for (let index = 0; index < cellslength; index++) {
        cells[index].style.backgroundColor = "white"
        
    }
    console.log("clear")
}

btn.addEventListener("click", clear)