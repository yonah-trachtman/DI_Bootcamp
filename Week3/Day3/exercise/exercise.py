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
import string
import random
import datetime
from math import floor
from func import addTwoNumber as addTwo
from faker import Faker
fake = Faker()



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
        

# 🌟 Exercise 3: String module
# Instructions

#     Generate random String of length 5
#     Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
#     Hint: use the string module


# 🌟 Exercise 4 : Current Date
# Instructions

#     Create a function that displays the current date.
#     Hint : Use the datetime module.


def rightNow() -> None:
    print(datetime.datetime.now().replace(microsecond=0))


# Exercise 5 : Amount of time left until January 1st
# Instructions

#     Create a function that displays the amount of time left from now until January 1st.
#     (Example: the 1st of January is in 10 days and 10:34:01hours).

def timeToJanFirst() -> None:
    janFirst = datetime.datetime(2025, 1, 1, 0, 0, 0)
    timeLeft = janFirst - datetime.datetime.now().replace(microsecond=0)
    print(f"the 1st of January is in {timeLeft} minutes")


#     Exercise 6 : Birthday and minutes
# Instructions

#     Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

def minutesLived(birthday: "datetime") -> None:
    lifeLived = datetime.datetime.now().replace(microsecond=0) - birthday
    minutes = int(lifeLived.total_seconds() / 60)
    print(f"you've lived {minutes} minutes")



# Exercise 7 : Faker Module
# Instructions

#     Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
#     Create an empty list called users. Tip: It should be a list of dictionaries.
#     Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.





        
    


def main():
    def addFaker():
        users.append(dict(name = fake.name(), address = fake.address(), langage_code = fake.language_code()))

    
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

    print(addTwo(number, 2))

    print(''.join(random.choices(string.ascii_letters, k=5)))

    rightNow()

    timeToJanFirst()

    minutesLived(datetime.datetime(1998, 7, 30, 0, 0, 0))

    users = []
    addFaker()
    addFaker()
    for user in users:
        print(user)
    


if __name__ == "__main__":
    main()