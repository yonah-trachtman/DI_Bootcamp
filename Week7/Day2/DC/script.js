
// Instructions



//     Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//     In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
//     In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
//     The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
//     Allow the user to delete a specific gif by clicking the DELETE button.
//     Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
const deleteAll = document.getElementById("DELETEAll");
const finder = document.getElementById("gifFinder");
const category = document.getElementById("category");
let idnumber = 0


async function appendGif(e) {
    e.preventDefault();
    const currentid = idnumber.toString();
    let randomGif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category.value}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    let data = await randomGif.json();
    const div = document.createElement("div");
    div.id = currentid;
    div.classList.add("gifDiv")
    div.style.display = "flex";
    div.style.flexDirection = "column";
    const img = document.createElement("img");
    img.src = data.data.images.original.url;
    const del = document.createElement("button");
    del.innerHTML = "delete";
    del.addEventListener("click", function() {
        document.getElementById(currentid).remove();
    })
    div.append(img, del);
    document.body.appendChild(div);
    idnumber++
}


finder.addEventListener("click", function(e) {
    appendGif(e)
})


deleteAll.addEventListener("click", function () {
    document.querySelectorAll('.gifDiv').forEach(e => e.remove());
})
