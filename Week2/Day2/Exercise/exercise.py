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