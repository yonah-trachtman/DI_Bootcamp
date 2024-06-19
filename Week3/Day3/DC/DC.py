# Instructions :

# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

#     Compute the circle’s area
#     Print the attributes of the circle - use a dunder method
#     Be able to add two circles together, and return a new circle with the new radius - use a dunder method
#     Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
#     Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
#     Be able to put them in a list and sort them


import math 
class Circle():
    def __init__(self, **kwargs) -> None:
        if "diameter" in kwargs:
            self.radius = kwargs.get("diameter") / 2
        else:
            self.radius = kwargs["radius"]
        if "radius" in kwargs:
            self.diameter = kwargs.get("radius") * 2
        else:
            self.diameter = kwargs["diameter"]
        area = self.computeArea()
        
    

    def __str__(self) -> str:  # str()
        string = f"the radius is {self.radius} and a diameter of {self.diameter}"
        return string
    
    def __repr__(self) -> str:
        string = f"radius:{self.radius}\n diameter:{self.diameter}"
        return string
    
    def __add__(self, other: "Circle")-> int|float:
        newCircle = self.computeArea() + other.computeArea()
        return newCircle
    
    def __gt__(self, other: "Circle") -> bool:
        bigger = self.computeArea() > other.computeArea()
        return bigger
    
    def __eq__(self, other: "Circle") -> bool:
        same = self.computeArea() == other.computeArea()
        return same
    
    def computeArea(self) -> int|float:
        area = 3.14*self.radius**2
        return area
    
def sortBysize( *args) -> list:
        listOfcircles = []
        for item in args:
            if isinstance(item, Circle):
                listOfcircles.append(item.computeArea())
        listOfcircles.sort(reverse = True)
        return listOfcircles

    




c1 = Circle(radius = 2)
c2 = Circle(diameter = 6)
c3 = Circle(radius = 4)



print(sortBysize(c1, c2, c3))