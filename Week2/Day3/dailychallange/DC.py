# Instructions
# Challenge 1

#     Ask a user for a word

#     Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#         Make sure the letters are the keys.
#         Make sure the letters are strings.
#         Make sure the indexes are stored in a list and those lists are values.

# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}


# Code starts here!!!!
userInput = input("Please write a string ")
wordDict = {}
langth = 0
for char in userInput:
    if char in wordDict:
        wordDict[char] += [langth]
    else:
        wordDict[char] = [langth]
    langth += 1
print(wordDict)





# Challenge 2

#     Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
#     Sort the list in alphabetical order.
#     Return “Nothing” if you can’t afford anything from the store.

# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# The key is the product, the value is the price



# Code starts here!!!!
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}
indx = 0
avalible = []
wallet = "$300"

for char in wallet:
    if char.isdigit() == False:
        wallet = wallet.replace(char, "")
wallet = int(wallet)



for key in items_purchase:
    for value in items_purchase.values():
        for char in value:
            if char.isdigit() == False:
                items_purchase[key] = items_purchase[key].replace(char, "")



for key in items_purchase:
    items_purchase[key] = int(items_purchase[key])
    if items_purchase[key] <= wallet:
        avalible.append(key)
if len(avalible) == 0:
    print("Nothing")
else:
    avalible.sort()
    print(avalible)