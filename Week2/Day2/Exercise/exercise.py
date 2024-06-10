# 🌟 Exercise 1 : Favorite Numbers
# Instructions

#     Create a set called my_fav_numbers with all your favorites numbers.
#     Add two new numbers to the set.
#     Remove the last number.
#     Create a set called friend_fav_numbers with your friend’s favorites numbers.
#     Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

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


for i in range(1, 20 + 1):
   print(i)

for i in range(1, 20 + 1, 2):
   print(i + 1)



#    🌟 Exercise 6 : While Loop
# Instructions

#     Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.


lastName = input("Beep Boop I'm a robot, please give me your last name ")

while lastName != "Trachtman":
   
   lastName = input("Beep Boop I'm a robot, please give me your last name ")