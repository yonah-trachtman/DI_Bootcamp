# Exercise 1 : Hello World-I love Python
# Instructions

#     Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python


print("""Hello world
Hello world
Hello world
Hello world
I love python
I love python
I love python
I love python
""")


# Exercise 2 : What is the Season ?
# Instructions

#     Ask the user to input a month (1 to 12).
#     Display the season of the month received :
#         Spring runs from March (3) to May (5)
#         Summer runs from June (6) to August (8)
#         Autumn runs from September (9) to November (11)
#         Winter runs from December (12) to February (2)


month = input ("Please input a month from 1 to 12? ")

month = int(month)

if month > 2 and month < 6:
    print("The Season of Spring")
elif month > 5 and month < 9:
    print("The Season of Summer")
elif month > 8 and month < 12:
    print("The Season of Fall")
elif month == 12 or month < 3:
    print("The Season of Winter")
else:
    print("that is not a month number")