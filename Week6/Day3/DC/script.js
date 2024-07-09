// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//     Create a class named Video. The class should be constructed with the following parameters:
//         title (a string)
//         uploader (a string, the person who uploaded it)
//         time (a number, the duration of the video - in seconds)
class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }
//     Create a method called watch() which displays a string as follows:
//     “uploader parameter watched all time parameter of title parameter!”
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

//     Instantiate a new Video instance and call the watch() method.
let vid1 = new Video("New set release", "MTG Official", 257)

vid1.watch()

//     Instantiate a second Video instance with different values.
let vid2 = new Video("set review", "MTG card grader", 743)

vid2.watch()



//     Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//     Think of the best data structure to save this information within the array.
let arrOfVidinfo = [["title1", "uploader1", 300], ["title2", "uploader2", 301], ["title3", "uploader3", 302], ["title4", "uploader4", 303], ["title5", "uploader5", 304]]

//     Bonus: Loop through the array to instantiate those instances.
let arrofvids = []

for (let index = 0; index < arrOfVidinfo.length; index++) {
    arrofvids.push(new Video(arrOfVidinfo[index][0], arrOfVidinfo[index][1], arrOfVidinfo[index][2]))

    
}

arrofvids[0].watch()
