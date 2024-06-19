# Instructions :

# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.


# Part I

# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

#     Create a class called Text that takes a string as an argument and store the text in a attribute.
#     Hint: You need to manually copy-paste the text, straight into the code

#     Implement the following methods:
#         a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#         a method that returns the most common word in the text.
#         a method that returns a list of all the unique words in the text.


import os
import json
from collections import Counter
class Text():
    def __init__(self, strText: str) -> None:
        self.strText = strText

    def howOften(self, string: str) -> str|int:
        listOfWords = self.strText.split()
        counter = listOfWords.count(string)
        if counter == 0:
            return "This word might not have apeared in this text but don't give up hope in finding what you seek"
        else:
            return counter


    def mostCommon(self) -> str:
        listOfWords = self.strText.split()
        wordDict = Counter(listOfWords)
        commonWord = max(wordDict.values())
        for key in wordDict.keys():
            if wordDict[key] == commonWord:
                return f"{key} : {commonWord}"
              

    def everyWord(self) -> list:
        listOfWords = self.strText.split()
        newList = []
        for word in listOfWords:
            if word not in newList:
                newList.append(word)
            else:
                continue
        return newList
    

    @classmethod  
    def fromFile(cls, fileName):
        with open(fileName, mode = 'r') as file:
            textFile = file.read()
            return cls(textFile)
           
        
    def to_upper(self): 
        return self.txtStr.upper()
    


# Part II

# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

#     Implement a classmethod that returns a Text instance but with a text file:

#         >>> Text.from_file('the_stranger.txt')

#     Hint: You need to open and read the text from the text file.

#     Now, use the provided the_stranger.txt file and try using the class you created above.

dirPath = os.path.dirname(os.path.realpath(__file__))

contentFile = dirPath + "//the_stranger.txt"


    
    

def main():
    txt = Text("this word might not have apeared in this text but don't give up hope in finding what you seek")
    print(txt.everyWord())
    print(txt.mostCommon())
    print(txt.howOften("this"))
    txt2 = Text.fromFile(contentFile)
    print(txt2.mostCommon())
    print(txt2.everyWord())
    print(txt2.howOften("Oblong"))
    



if __name__ == "__main__":
    main()