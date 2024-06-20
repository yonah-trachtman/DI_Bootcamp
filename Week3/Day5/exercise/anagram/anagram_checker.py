# What you will create


# 🌟 Anagram checker

# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.


# Instructions

#     Create a new file called anagram_checker.py which contains a class called AnagramChecker.

#     The class should have the following methods:
#         __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
#         is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.

#         get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)

#         Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.

#         Note: None of the methods in the class should print anything.


import os

dirPath = os.path.dirname(os.path.realpath(__file__))

contentFile = dirPath + "//sowpods.txt"

class AnagramChecker():
    def __init__(self, file) -> None:
        with open(file) as file:
            self.file = file.read()
        self.wordList = self.file.split("\n")
        

    def isValidWord(self, word:str) -> bool:
        return word.upper() in self.wordList
    
    
    
    def getAnigrams(self, word:str) -> list:
        listOfAnograms = []
        for listWord in self.wordList:
           if isAnagram(word, listWord):
               listOfAnograms.append(listWord)
        return listOfAnograms


def isAnagram(word1:str,word2:str) -> bool:
        if sorted(word1.upper()) == sorted(word2.upper()):
            return word2



    





fileOfWords = AnagramChecker(contentFile)