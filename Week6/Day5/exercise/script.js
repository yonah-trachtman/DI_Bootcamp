const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

const main = document.getElementById("main")
const searchValue = document.getElementById("input")

function addRobo(obj) {
    const div = document.createElement("div")
    div.classList.add("robo")
    div.classList.add(obj.username)
    const img = document.createElement("img")
    img.src = obj.image
    const roboName = document.createElement("h4")
    roboName.innerText = obj.name
    const roboEmail = document.createElement("p")
    roboEmail.innerText = obj.email
    div.append(img, roboName, roboEmail)
    main.append(div)
}



robots.forEach(addRobo)
let mainNodes = main.childNodes

 function roboSearch(value) {
    let lowerValue = value.toLowerCase();
    for (let index = 1; index < mainNodes.length; index++) {
        if (mainNodes[index].childNodes[1].innerText.toLowerCase().includes(lowerValue) == false) {
            mainNodes[index].style.display = "none"
            mainNodes[index].classList.add("hidden")
            console.log(mainNodes[index].classList)
        } else {
            mainNodes[index].style.display = "flex"
            mainNodes[index].classList.remove("hidden")
            console.log(mainNodes[index].classList)
        }
        
    } 
 }
 searchValue.addEventListener("input", function () {
    roboSearch(searchValue.value)
 })

 // setInterval(function () {console.log(searchValue.value);}, 1000);