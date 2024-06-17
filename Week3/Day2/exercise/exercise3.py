# 🌟 Exercise 3 : Dogs Domesticated
# Instructions

#     Create a new python file and import your Dog class from the previous exercise.
#     In the new python file, create a class named PetDog that inherits from Dog.
#     Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
#     Add the following methods:
#         train: prints the output of bark and switches the trained boolean to True

#         play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

#         do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#             “dog_name does a barrel roll”.
#             “dog_name stands on his back legs”.
#             “dog_name shakes your hand”.
#             “dog_name plays dead”.

from exercise import Dog 
import random


class PetDog(Dog):
    def __init__(self, name: str, age: int | float, weight: int | float, trained: bool = False) -> None:
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dogNames: str) -> None:
        names = " ".join(dogNames)
        print(f"{self.name} {names} all play together")

    def doATrick(self) -> None:
        trick = random.randint(0,3)
        tricks = [f"{self.name} does a barrel roll", f"{self.name} stands on his back legs", f"{self.name} shakes your hand", f"{self.name} plays dead"]
        if self.trained:
            print(tricks[trick])
           


    






def main():
    rio = Dog("Rio", 15, 130)
    jeep = Dog("Jeep", 17, 140)
    sully = Dog("Sully", 20, 100)
    sabra = PetDog("Sabra", 12, 137)

    sabra.train()
    sabra.play(rio.name, jeep.name, sully.name)
    sabra.doATrick()


if __name__ == "__main__":
    main()
