# 🌟 Exercise 1: Cats
# Instructions

# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

#     Instantiate three Cat objects using the code provided above.
#     Outside of the class, create a function that finds the oldest cat and returns the cat.
#     Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def findCat(catList: list[Cat]) -> Cat:
        oldestCat = catList[0]
        for cat in catList:
            if cat.age > oldestCat.age:
                oldestCat = cat
        return oldestCat




# 🌟 Exercise 2 : Dogs
# Instructions

#     Create a class called Dog.
#     In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
#     Create a method called bark that prints the following string “<dog_name> goes woof!”.
#     Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
#     Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
#     Print the details of his dog (ie. name and height) and call the methods bark and jump.
#     Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
#     Print the details of her dog (ie. name and height) and call the methods bark and jump.
#     Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.


class Dog:
    def __init__(self, name : str, height : int | float) -> None:
        self.name = name
        self.height = height



    def bark(self) -> None:
        print(f"{self.name} goes woof")

    def jump(self) -> None:
        print(f"{self.name} jumps {self.height * 2} cm high!")

def introduceDog(dog: Dog):
    print(f"this dog's name is {dog.name} and it is {dog.height} cm")




# 🌟 Exercise 3 : Who’s the song producer?
# Instructions

#     Define a class called Song, it will show the lyrics of a song.
#     Its __init__() method should have two arguments: self and lyrics (a list).
#     Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.

#     Create an object, for example:

#     stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


#     Then, call the sing_me_a_song method. The output should be:

#     There’s a lady who's sure
#     all that glitters is gold
#     and she’s buying a stairway to heaven



class Song:
    def __init__(self, lyrics: list) -> None:
        self.lyrics = lyrics

    def singMeASong(self):
        for lyrics in self.lyrics:
            print(lyrics)



            
# Exercise 4 : Afternoon at the Zoo
# Instructions

#     Create a class called Zoo.
#     In this class create a method __init__ that takes one parameter: zoo_name.
#     It instantiates two attributes: animals (an empty list) and name (name of the zoo).
#     Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
#     Create a method called get_animals that prints all the animals of the zoo.
#     Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.

#     Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
#     Example

#     { 
#         1: "Ape",
#         2: ["Baboon", "Bear"],
#         3: ['Cat', 'Cougar'],
#         4: ['Eel', 'Emu']
#     }


#     Create a method called get_groups that prints the animal/animals inside each group.
#     Create an object called ramat_gan_safari and call all the methods.
#     Tip: The zookeeper is the one who will use this class.
#     Example

#     Which animal should we add to the zoo --> Giraffe
#     x.add_animal(Giraffe)


class Zoo:
    def __init__(self, zooName: str) -> None:
        self.animals = []
        self.name = zooName
        self.dictonary = {}
    
    def addAnimal(self, newAnimal: str) -> None:
        newAnimal = newAnimal.capitalize()
        if newAnimal.capitalize() not in self.animals:
            self.animals.append(newAnimal.capitalize())
        else:
            print(f"we already have {newAnimal}")
    
    def getAnimals(self) -> None:
        print(self.animals)


    def sellAnimals(self, animalSold: str) -> None:
        animalSold = animalSold.capitalize()
        if animalSold in self.animals:
            self.animals.remove(animalSold)
        else:
            print(f"we do not have any {animalSold} to sell")

    def sortAnimals(self) -> None:

        self.animals.sort
        for animal in self.animals:
            if animal[0] in self.dictonary:
                self.dictonary[animal[0]].append(animal) 
            else:
                self.dictonary.update({animal[0]: [animal]})

    def getGroups(self) -> None:
        print("here are the animals we have in this zoo")
        for key, value in self.dictonary.items():
            print(f"{key}: {value}")
            










def main():
    exercise1
    catBaruthiel = Cat("Baruthiel", 12)
    catWrestle = Cat("Wrestle", 24)
    catWillow = Cat("Willow", 30)
    catList = [catBaruthiel, catWrestle, catWillow]
    oldestCat = findCat(catList)
    print(f"The oldest cat is {oldestCat.name}, and is {oldestCat.age} years old")

    # exercise2
    davidsDog = Dog("Rex", 50)
    sarahsDog = Dog("Teacup", 20)
    introduceDog(davidsDog)
    davidsDog.bark()
    davidsDog.jump()
    introduceDog(sarahsDog)
    sarahsDog.bark()
    sarahsDog.jump()

    if sarahsDog.height > davidsDog.height:
        print(f"{sarahsDog.name} is {sarahsDog.height} cm, and {davidsDog.name} is {davidsDog.height} cm. {sarahsDog.name} is bigger")
    else:
        print(f"{davidsDog.name} is {davidsDog.height} cm, and {sarahsDog.name} is {sarahsDog.height} cm. {davidsDog.name} is bigger")


    # exercise3
    stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
    stairway.singMeASong()


    # exercise4
    ramatGanZoo = Zoo("Ramat Gan Zoo")

    ramatGanZoo.addAnimal("Ape")
    ramatGanZoo.addAnimal("Baboon")
    ramatGanZoo.addAnimal("Bear")
    ramatGanZoo.addAnimal("Cat")
    ramatGanZoo.addAnimal("Cougar")
    ramatGanZoo.addAnimal("Eel")
    ramatGanZoo.addAnimal("Emu")
    ramatGanZoo.sellAnimals("dragon")
    ramatGanZoo.addAnimal("Dragon")
    ramatGanZoo.addAnimal("Dragon")
    ramatGanZoo.addAnimal("Unicorn")
    ramatGanZoo.sellAnimals("dragon")
    ramatGanZoo.sellAnimals("unicorn")
    ramatGanZoo.sortAnimals()
    ramatGanZoo.getGroups()


if __name__ == "__main__":
    main()