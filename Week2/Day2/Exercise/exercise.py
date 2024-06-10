# 🌟 Exercise 1 : Favorite Numbers
# Instructions

#     Create a set called my_fav_numbers with all your favorites numbers.
#     Add two new numbers to the set.
#     Remove the last number.
#     Create a set called friend_fav_numbers with your friend’s favorites numbers.
#     Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


# CODE STARTS HERE!!!!
my_fav_numbers = {25, 42, 9}
print(my_fav_numbers)

my_fav_numbers.add(1)
print(my_fav_numbers)
my_fav_numbers.add(2)
print(my_fav_numbers)

my_fav_numbers.discard(2)
print(my_fav_numbers)
my_fav_numbers.discard(1)
print(my_fav_numbers)

friend_fav_numbers = {7, 8, 2132}
print(friend_fav_numbers)

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)




# 🌟Exercise 2: Tuple
# Instructions

#     Given a tuple which value is integers, is it possible to add more integers to the tuple?

# No



# 🌟 Exercise 3: List
# Instructions

# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

#     Remove “Banana” from the list.
#     Remove “Blueberries” from the list.
#     Add “Kiwi” to the end of the list.
#     Add “Apples” to the beginning of the list.
#     Count how many apples are in the basket.
#     Empty the basket.
#     Print(basket)


# CODE STARTS HERE!!!!
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
shelf = ["Kiwi", "Apples"]

basket.pop(0)
basket.remove("Blueberries")
basket.extend(shelf)
apples = basket.count("Apples")
print(apples)
print(basket)
basket = []
print(basket)


# 🌟 Exercise 4: Floats
# Instructions

#     Recap – What is a float? What is the difference between an integer and a float? a float is any number that has a decimal place and an integer is a whole number
#     Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
#     Can you think of another way to generate a sequence of floats?


# CODE STARTS HERE!!!!
numbers = []

for i in range(1, 6):
    if i < 2 or i > 4:
      numbers.append(i)
    else:
       numbers.append(i)
       i += 0.5
       numbers.append(i)



print(numbers)



# 🌟 Exercise 5: For Loop
# Instructions

#     Use a for loop to print all numbers from 1 to 20, inclusive.
#     Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.


# CODE STARTS HERE!!!!
for i in range(1, 20 + 1):
   print(i)

for i in range(1, 20 + 1, 2):
   print(i + 1)



#    🌟 Exercise 6 : While Loop
# Instructions

#     Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.


# CODE STARTS HERE!!!!
lastName = input("Beep Boop I'm a robot, please give me your last name ")
lastName = lastName.capitalize()
while lastName != "Trachtman":
   
   lastName = input("Beep Boop I'm a robot, please give me your last name ")
   lastName = lastName.capitalize()



#    🌟 Exercise 7: Favorite fruits
# Instructions

#     Ask the user to input their favorite fruit(s) (one or several fruits).
#     Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#     Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#     Now that we have a list of fruits, ask the user to input a name of any fruit.
#         If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#         If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


# CODE STARTS HERE!!!!
askForFruits = input("Please give me a list of fruits seperated by single spaces ")

chosenFruit = askForFruits.split()

print(chosenFruit)

checkForFruit = input("Choose ONE! fruit")

if checkForFruit in chosenFruit:
   print("You chose one of your favorite fruits! Enjoy!")
else:
   print("You chose a new fruit. I hope you enjoy")


# Exercise 8: Who ordered a pizza ?
# Instructions

#     Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
#     As they enter each topping, print a message saying you’ll add that topping to their pizza.
#     Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# CODE STARTS HERE!!!!
toppingsOnPizza = []
while True:
   topping = input("please provide a topping or if you have selected all the toppings you want type Quit ")
   topping = topping.capitalize()
   message = f"We will add {topping} to your pizza"
   if topping == "Quit":
      finalPrice = 10 + len(toppingsOnPizza) * 2.5
      print(f"Alright your pizza has {toppingsOnPizza}, and the final price will be {str(finalPrice)}")
      break
   else:
      print (message)
      toppingsOnPizza.append(topping)



# Exercise 9: Cinemax
# Instructions

#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Ask a family the age of each person who wants a ticket.

#     Store the total cost of all the family’s tickets and print it out.

#     A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#     Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
#     At the end, print the final list.


# CODE STARTS HERE!!!!
while True:
    totalcost = 0
    askAge = input("please submit your age ")

    if askAge.isdigit() == True:
       askAge = int(askAge)
       if askAge < 3:
        print("Ok that will be free")
       elif askAge > 2 and askAge < 12:
        print("Ok that will be $10")
        totalcost += 10
       elif askAge >= 12:
        print("Ok that will be $15")
        totalcost += 15
    else:
       print(f"Alright that's everything your total is ${totalcost}")
       break



listOfNames = ["Stacy", "Krim", "Albia", "Vic"]
permitedNames = []

for name in listOfNames:

    teenagersAge = input(f" Hello {name}. Please input your age ")

    if teenagersAge.isdigit() == True:
       age = int(teenagersAge)

       if age > 16 and age < 22:
          print(f"alraight {name}. You are authorized to watch this movie")
          permitedNames.append(name)
       else:
          print(f"Sorry {name}. You are not authorized to watch this movie")
          
    else:
      print("If you do not give me your age I can not let you watch this movie")
      

print(f"here's who was allowed to veiw the film {permitedNames}")



# Exercise 10 : Sandwich Orders
# Instructions

# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#     The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
#     We need to prepare the orders of the clients:
#         Create an empty list called finished_sandwiches.
#         One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
#     After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

# CODE STARTS HERE!!!!
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []
pastrami = False

while pastrami == False and "Pastrami sandwich" in sandwich_orders:
      
      sandwich_orders.remove("Pastrami sandwich")

while len(sandwich_orders) > 0:
    for sandwich in sandwich_orders:
        finished_sandwiches.append(sandwich)
        print(f"I made your {sandwich}")
        sandwich_orders.remove(sandwich)

print(sandwich_orders)
print(finished_sandwiches)

      
