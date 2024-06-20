# Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.

#     It should do the following:
#         Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.

#         If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
#             Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
#             Only alphabetic characters are allowed. No numbers or special characters.
#             Whitespace should be removed from the start and end of the user’s input.

#         Once your code has decided that the user’s input is valid, it should find out the following:
#             All possible anagrams to the user’s word.
#             Create an AnagramChecker instance and apply it to the steps created above.
#             Display the information about the word in a user-friendly, nicely-formatted message. 


from anagram_checker import fileOfWords

isRunning = True
while isRunning:

    userInput = input("welcome to the anagram checker to check the anagrams of a single word please type it in or, to exit input 'X': ")
    userInput.strip()
    if userInput.isalpha():
        userInput = userInput.upper()
        if userInput == "X":
            break
        elif fileOfWords.isValidWord(userInput):
            print (f"{userInput.lower().capitalize()} had {len(fileOfWords.getAnigrams(userInput))} anagrams here they are\n {' '.join(fileOfWords.getAnigrams(userInput))} ")
        else:
            print("sorry that word is not in our dictionary")
            
    else:
        print("sorry that's not a single word")
