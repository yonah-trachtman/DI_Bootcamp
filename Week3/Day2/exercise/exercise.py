# 🌟 Exercise 1 : Pets
# Instructions

# Using this code:

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


#     Create another cat breed named Siamese which inherits from the Cat class.
#     Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
#     Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
#     Take all the cats for a walk, use the walk method.


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    


# 🌟 Exercise 2 : Dogs
# Instructions

#     Create a class called Dog with the following attributes name, age, weight.
#     Implement the following methods in the Dog class:
#         bark: returns a string which states: “<dog_name> is barking”.
#         run_speed: returns the dogs running speed (weight/age*10).
#         fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

#     Create 3 dogs and run them through your class.


class Dog:
    def __init__(self, name: str, age: int|float, weight: int|float) -> None:
        self.name = name
        self.age = age
        self.weight = weight


    def bark(self) -> str:
        return f"{self.name} is barking"
    
    def runSpeed(self) -> int|float:
        return self.weight/self.age*10
    
    def fight(self, otherDog):
        if self.runSpeed() * self.weight >= otherDog.runSpeed() * otherDog.weight:
            return f"winner is {self.name}"
        else:
            return f"winner is {otherDog.name}"











def main():
    # exercise1
    bengal = Bengal("Bengal", 10)
    chartreux = Chartreux("Chartreux", 5)
    siamese = Siamese("Siamese", 14)
    allCats = [ bengal, chartreux, siamese]
    sarasPets = Pets(allCats)

    sarasPets.walk()

    # exercise2
    rio = Dog("Rio", 15, 130)
    jeep = Dog("Jeep", 17, 140)
    sully = Dog("Sully", 20, 100)

    print(rio.bark())
    print(jeep.runSpeed())
    print(sully.fight(rio))


if __name__ == "__main__":
    main()