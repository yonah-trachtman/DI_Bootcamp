# Instructions

#     Using the input function, ask the user for a string. The string must be 10 characters long.
#         If it’s less than 10 characters, print a message which states “string not long enough”.
#         If it’s more than 10 characters, print a message which states “string too long”.
#         If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

#     Then, print the first and last characters of the given text.

#     Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

#     The user enters "HelloWorld"
#     Then, you have to construct the string character by character
#     H
#     He
#     Hel
#     ... etc
#     HelloWorld


userWord = input("Please enter a 10 letter word ")

if len(userWord) < 10:
    print ("string not long enough") 
elif len(userWord) > 10:
    print ("string too long")
else:
    print ("perfect string")

    print(userWord[0] + userWord[9])

    for letter in range(1, len(userWord) + 1):
        print(userWord[0:letter])