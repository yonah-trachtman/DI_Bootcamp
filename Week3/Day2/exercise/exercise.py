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
        
# Exercise 4 : Family
# Instructions

#     Create a class called Family and implement the following attributes:
#         members: list of dictionaries
#         last_name : (string)

#     Implement the following methods:
#         born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
#         is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
#         family_presentation: a method that prints the family’s last name and all the members’ details.

#     Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

#         [
#             {'name':'Michael','age':35,'gender':'Male','is_child':False},
#             {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#         ]

class Family():
    def __init__(self, lastName: str) -> None:
        self.members = []
        self.lastname = lastName

    def born(self, **info) -> None:
        self.members.append(info)
        print("congratulatons on the new child")
    
    def is18(self, name) -> bool:
        for member in self.members:
            if name in member.values():
                if member.get("age") >= 18:
                    return True
                else:
                    return False
        
    def familyPresentation(self) -> None:
        print(self.lastname)
        for member in self.members:
            print(member)


# Exercise 5 : TheIncredibles Family
# Instructions

#     Create a class called TheIncredibles. This class should inherit from the Family class:
#     This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)

#     Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

#     Add a method called incredible_presentation which :
#         Print a sentence like “*Here is our powerful family **”
#         Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)


#     Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

#         [
#             {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#             {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#         ]


#     Call the incredible_presentation method.

#     Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.

#     Call the incredible_presentation method again.


class TheIncredibles(Family):
    def usePowers(self, name:str) -> None:
        for member in self.members:
            if name in member.values():
                if member.get("age") >= 18:
                    print(member.get("power"))
                else:
                    raise Exception("sorry they are too young, they are not over 18")
                

    def incrediblePresentation(self):
        print("Here is our powerful family")
        super().familyPresentation()
        
                



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


    # exercise4
    millards = Family("Millards")
    millards.born(name ="Michael",age = 35, gender = "Male", is_child = False)
    millards.born(name ="Sarah",age = 12, gender = "Female", is_child = True)
    print(millards.is18("Sarah"))
    millards.familyPresentation()

    # exercise5
    incredibles = TheIncredibles("Incredibles")
    incredibles.born(name ="Michael",age = 35, gender = "Male", is_child = False, power = "fly", incredible_name = "MikeFly")
    incredibles.born(name ="Sarah",age = 12, gender = "Female", is_child = True, power = "read minds", incredible_name = "SuperWoman")
    incredibles.incrediblePresentation()
    incredibles.born(name ="Baby Jack",age = 0, gender = "Male", is_child = True, power = "Unknown Power", incredible_name = "None")
    incredibles.incrediblePresentation()
    incredibles.usePowers("Michael")
    incredibles.usePowers("Sarah")


if __name__ == "__main__":
    main()