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
def describe_city(city, country = "Israel"):
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




# 🌟 Exercise 5 : Let’s create some personalized shirts !
# Instructions

#     Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
#     The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
#     Call the function make_shirt().

#     Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
#     Call the function, in order to make a large shirt with the default message
#     Make medium shirt with the default message
#     Make a shirt of any size with a different message.

#     Bonus: Call the function make_shirt() using keyword arguments.


# Code starts here!!!!
def make_shirt(size = "L", text = "I love Python"):
    return f"The size of the shirt is {size} and the text is {text}"

print(make_shirt())
print(make_shirt("M"))
print(make_shirt(text = "Fleem"))
print(make_shirt(text = "Fleem", size = "XXXXXL"))




# 🌟 Exercise 6 : Magicians …
# Instructions

# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

#     Create a function called show_magicians(), which prints the name of each magician in the list.
#     Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
#     Call the function make_great().
#     Call the function show_magicians() to see that the list has actually been modified.



# Code starts here!!!!
magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]

