# 🌟 Exercise 1 – Random Sentence Generator
# Instructions

# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

#     Save it in your development directory.

#     Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

#     Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
#         use the words list to get your random words.
#         the amount of words should be the value of the length parameter.

#     Take the random words and create a sentence (using a python method), the sentence should be lower case.

#     Create a function called main which will:
#         Print a message explaining what the program does.

#         Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
#             If the user inputs incorrect data, print an error message and end the program.
#             If the user inputs correct data, run your code.


import os
import random
import json

dirPath = os.path.dirname(os.path.realpath(__file__))

contentFile = dirPath + "//wordlist.txt"
contents = ""

def getWordsFromFile(content) -> list:
    with open(content) as file:
        contents = file.read()

    contentsList = contents.split("\n")
    return contentsList

def getRandomSentence(length: int) -> str:
    contents = getWordsFromFile(contentFile)
    sentance = []
    for i in range(length):    
        sentance.append(contents[random.randint(0, len(contents))].lower())
    return " ".join(sentance)


def mainFunc() -> None:
    print("This function will give you a sentance of random words from the external file")
    numberStr = input("please choose a number between 2 and 20: ")
    numberInt = int(numberStr)
    if numberInt >= 2 or numberInt <= 20:
        print(getRandomSentence(numberInt))
    else: raise Exception("That was not a valid input")


# 🌟 Exercise 2: Working with JSON
# Instructions

# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""


#     Access the nested “salary” key from the JSON-string above.
#     Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
#     Save the dictionary as JSON to a file.



sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

jsondictionary = json.loads(sampleJson)







def main():


    # mainFunc()
    jsondictionary = json.loads(sampleJson)
    jsondictionary["company"]["employee"]["payable"]["salary"] += 3000
    jsondictionary["company"]["employee"].update({"birth_date" : 1984})
    finalJson = json.dumps(jsondictionary)
    

    

if __name__ == "__main__":
    main()