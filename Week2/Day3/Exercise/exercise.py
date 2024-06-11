# 🌟 Exercise 1 : Convert lists into dictionaries
# Instructions

#     Convert the two following lists, into dictionaries.
#     Hint: Use the zip method

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# Code starts here!!!!
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dictionary1 = zip(keys, values)
dictionary1 = dict(dictionary1)
print(dictionary1)



# 🌟 Exercise 2 : Cinemax #2
# Instructions

#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Given the following object:

#     family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


#     How much does each family member have to pay ?
#     Print out the family’s total cost for the movies.
#     Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# Code starts here!!!!
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
totalCost = 0
for value in family.values():
    
    if value > 12:
        totalCost += 15
    elif value < 13 and value > 3:
        totalCost += 10

print(totalCost)






