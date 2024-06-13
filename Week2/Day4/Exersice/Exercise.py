import random

# Exercise 1 : What are you learning ?
# Instructions

#     Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
#     Call the function, and make sure the message displays correctly.

# Code starts here!!!!
def display_message():
    return "I'm currently learning python"


print(display_message())





# 🌟 Exercise 2: What’s your favorite book ?
# Instructions

#     Write a function called favorite_book() that accepts one parameter called title.
#     The function should print a message, such as "One of my favorite books is <title>".
#     For example: “One of my favorite books is Alice in Wonderland”
#     Call the function, make sure to include a book title as an argument when calling the function.


# Code starts here!!!!
def favorite_book(title):
    print(f"One of my favorite books is {title}")



favorite_book("Feet of Clay")




# 🌟 Exercise 3 : Some Geography
# Instructions

#     Write a function called describe_city() that accepts the name of a city and its country as parameters.
#     The function should print a simple sentence, such as "<city> is in <country>".
#     For example “Reykjavik is in Iceland”
#     Give the country parameter a default value.
#     Call your function.



# Code starts here!!!!
def describe_city(city, country = "israel"):
    print(f"{city} is in {country}")


describe_city("Maalot")



# Exercise 4 : Random
# Instructions

#     Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
#     Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.


# Code starts here!!!!
def numberGame(PlayerNum = random.randint(1, 100)):
   comNumber = random.randint(1, 100)
   if PlayerNum > comNumber:
       print (f"You got {PlayerNum} and the Computer got {comNumber} You win")
   else:
       print (f"You got {PlayerNum} and the Computer got {comNumber} You lose")
   

numberGame()




