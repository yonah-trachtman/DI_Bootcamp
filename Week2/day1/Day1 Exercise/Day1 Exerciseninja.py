# Exercise : Outputs
# Instructions

#     Predict the output of the following code snippets:

#     >>> 3 <= 3 < 9 True

#     >>> 3 == 3 == 3 True

#     >>> bool(0) False

#     >>> bool(5 == "5") False

#     >>> bool(4 == 4) == bool("4" == "4") True

#     >>> bool(bool(None)) False

#     x = (1 == True) True
#     y = (1 == False) False
#     a = True + 4 5
    # b = False + 10 10

#     print("x is", x) x is True
#     print("y is", y) y is False
#     print("a:", a) a: 5
#     print("b:", b) b: 10




# Exercise : How many characters in a sentence ?
# Instructions

#     Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).

my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum."""

print(len(my_text) + 1)




# Exercise : Longest word without a specific character
# Instructions

#     Keep asking the user to input the longest sentence they can without the character “A”.
#     Each time a user successfully sets a new longest sentence, print a congratulations message.




trueVar = True

longesSentance = ""

while trueVar == True:
    userWord = input("What's the longest sentance you can think of that doesn't have \"a\" in it? ")

    if "A" in userWord or "a" in userWord:
         userWord = print("Sorry that sentance has an \"a\" in it? ")
    else:
        print(f"good work your current sentance is {len(userWord)} characters long and the previous sentance was {len(longesSentance)} characters long")

        if len(userWord) > len(longesSentance):
            
            print("Yahoo you found a longer sentance new High score")
            
            longesSentance = userWord
        else:
            print("looks like you didn't find a longer sentance")

        goAgain = input("Do you want to go again? ")
        goAgain = goAgain.lower()
    
        if goAgain == "no" or goAgain == "nope":
                print(f"alright your high score is {len(longesSentance)}")
                trueVar == False
        else:
            continue
          



         