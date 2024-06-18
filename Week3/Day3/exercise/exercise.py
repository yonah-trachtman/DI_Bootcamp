# 🌟 Exercise 1: Currencies
# Instructions

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE


#     Using the code above, implement the relevant methods and dunder methods which will output the results below.
#     Hint : When adding 2 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>
from math import floor
from func import addTwoNumber as addTwo



class Currency:
    def __init__(self, currency: str, amount: int| float):
        self.currency = currency
        self.amount = amount

    def __str__(self) -> str:
        currencyString = f"{self.amount} {self.currency}s"
        return currencyString

    def __int__(self) -> int:
        currencyInt = floor(self.amount)
        return currencyInt
    
    def __repr__(self) -> str:
        currencyString = f"{self.amount} {self.currency}s"
        return currencyString
        
    def __add__(self, other: int|float)-> int|float:
        if isinstance(other, Currency):
            if other.currency != self.currency:
                raise Exception(f"Cannot add between Currency type {self.currency} and {other.currency}")
            else:
                newAmount = self.amount + other.amount
        else:
            newAmount = self.amount + other
        return newAmount
    
    def __iadd__(self, other: int|float)-> int|float:
        if isinstance(other, Currency):
            if other.currency != self.currency:
                raise Exception(f"Cannot add between Currency type {self.currency} and {other.currency}")
            else:
               self.amount += other.amount
               return self              
        else:
            self.amount += other
            return self
        
    


def main():

    
    c1 = Currency('dollar', 5)
    c2 = Currency('dollar', 10)
    c3 = Currency('shekel', 1)
    c4 = Currency('shekel', 10)

    print(str(c1))
    print(int(c1))
    print(repr(c1))
    print(c1 + 5)
    print(c1 + c2)
    print(c1)
    c1 += 5
    print(c1)
    c1 += c2
    print(c1)
    # print(c1 + c3)


    number = 12453124124

    print(addTwo(number))


if __name__ == "__main__":
    main()