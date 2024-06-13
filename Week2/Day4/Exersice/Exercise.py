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

def show_magicians():
    for name in magician_names:
        print(name)

def make_great():
    for i in range(len(magician_names)):
        magician_names[i] += " the Great"

show_magicians()
make_great()
show_magicians()



# 🌟 Exercise 7 : Temperature Advice
# Instructions

#     Create a function called get_random_temp().
#         This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
#         Test your function to make sure it generates expected results.

#     Create a function called main().
#         Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
#         Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

#     Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
#         below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
#         between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
#         between 16 and 23
#         between 24 and 32
#         between 32 and 40

#     Change the get_random_temp() function:
#         Add a parameter to the function, named ‘season’.
#         Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
#         Now that we’ve changed get_random_temp(), let’s change the main() function:
#             Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
#             Use the season as an argument when calling get_random_temp().

#     Bonus: Give the temperature as a floating-point number instead of an integer.
#    


# Code starts here!!!!
def get_random_temp(season = "Spring"):
    if season == "Winter":
      return round(random.uniform(-10, 16), 2)
    elif season == "Summer":
      return round(random.uniform(25, 40), 2)
    elif season == "Fall" or season == "Autumn":
      return round(random.uniform(0, 25), 2)
    else:
      return round(random.uniform(10, 30), 2)


def main():
    temp = get_random_temp(input("please give me a season? (if you don't put in a season it will default to spring also be sure to captilize)"))
    if temp < 0:
        print(f"The temperature right now is {temp} degrees Celsius. Brrr, that’s freezing! Wear some extra layers today")
    elif temp >= 0 and temp < 17:
        print(f"The temperature right now is {temp} degrees Celsius. Quite chilly! Don’t forget your coat")
    elif temp > 15 and temp < 24:
        print(f"The temperature right now is {temp} degrees Celsius. What lovely whether for this time of year")
    elif temp > 23 and temp < 33:
        print(f"The temperature right now is {temp} degrees Celsius. Oof it's really a scorcher")
    else:
        print(f"The temperature right now is {temp} degrees Celsius. SIZZLE!")

main()



# 🌟 Exercise 8 : Star Wars Quiz
# Instructions

# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


#     Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
#     Create a function that informs the user of his number of correct/incorrect answers.


# Code starts here!!!!
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

wrongAnswers = []
rightAnswers = []

def starWarsQuiz():
    print("Welcome to the star wars quiz please remember all answers must be capitilized")
    for topic in data:
        userAnswer = input(topic["question"])
        if userAnswer == topic["answer"]:
            print("that's correct")
            rightAnswers.append(userAnswer)
        else:
            print("sorry that's wrong")
            wrongAnswers.append(userAnswer)
        
    print(f"you got {len(rightAnswers)} questions right and {len(wrongAnswers)} questions wrong")

starWarsQuiz()