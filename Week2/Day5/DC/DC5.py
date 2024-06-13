# Challenge 1 : Sorting
# Instructions

#     Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
#     Use List Comprehension

# Example: 

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world


# Code starts here!!!!
userInput = input("please give me a string of words seperated by commas ")

listOfWords = userInput.split(",")

listOfWords.sort()

print(",".join(listOfWords))



# Challenge 2 : Longest Word
# Instructions

#     Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
#     Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"


# Code starts here!!!!
def longestWordFinder(words):
    wordLength = 0
    currentLongest = ""
    splitToList = words.split(" ")
    for word in splitToList:
        if len(word) > wordLength:
            wordLength = len(word)
            currentLongest = word
        else:
            continue
    print(f"The longest word in this sentance is {currentLongest}")

longestWordFinder("Margaret's toy is a pretty doll.")