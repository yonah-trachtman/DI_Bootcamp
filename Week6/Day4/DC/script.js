const form = document.getElementById("form")
const firstname = document.getElementById("name")
const lastname = document.getElementById("lastname")



form.onsubmit = function (e) {
    e.preventDefault()
    let toJson = {}
    toJson.name = firstname.value
    toJson.lastname = lastname.value
    const myJSON = JSON.stringify(toJson); 
    const para = document.createElement("p");
    para.innerText = myJSON;
    document.body.appendChild(para)
}