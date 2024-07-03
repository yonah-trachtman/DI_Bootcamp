// 🌟 Exercice 4 : Volume of a sphere
// Instructions

//     Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
document.getElementById('volume').value = 0
let form = document.getElementById("MyForm")

function calculateVolume(e) {
    e.preventDefault();
    let radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
  
  }
  
  form.addEventListener("submit", calculateVolume, false)