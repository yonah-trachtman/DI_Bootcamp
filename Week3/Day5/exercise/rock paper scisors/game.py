# Steps
# Part I - game.py

#     game.py – this file/module should contain a class called Game. It should have 4 methods:
#         get_user_item(self) – Ask the user to select an item (rock/paper/scissors). Keep asking until the user has selected one of the items – use data validation and looping. Return the item at the end of the function.

#         get_computer_item(self) – Select rock/paper/scissors at random for the computer. Return the item at the end of the function. Use python’s random.choice() function (read about it online).

#         get_game_result(self, user_item, computer_item) – Determine the result of the game.
#             Parameters:
#                 user_item – the user’s chosen item (rock/paper/scissors)
#                 computer_item – the computer’s chosen (random) item (rock/paper/scissors)
#                 Return either win, draw, or loss. Where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.

#         play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
#             Get the user’s item (rock/paper/scissors) and remember it

#             Get a random item for the computer (rock/paper/scissors) and remember it

#             Determine the results of the game by comparing the user’s item and the computer’s item
#                 Print the output of the game; something like this: “You selected rock. The computer selected paper. You lose”, “You selected scissors. The computer selected scissors. You drew!”

#                 Return the results of the game as a string: win;draw;loss;, where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.

import random
class Game:

    def getUseritem(self) -> str:
        needChoice = True
        options = {"r": "rock", "p": "paper", "s": "scissors"}
        while needChoice:
            userInput = input("Please input (r) for rock, (p) for paper, or (s) for scissors: ")
            userInput = userInput.strip()
            if userInput.isalpha():
                userInput = userInput.lower()
                if userInput in options:
                    return options[userInput]
                else:
                    print("Sorry that's not a valid input")
            else:
                print("Sorry that's not a valid input")  


    def getComputerItem(self) -> str:
        options = ["rock", "paper", "scissors"]
        choice = random.randint(0, 2)
        return options[choice]
    

    def getGameResult(self, userItem:str, comItem:str) -> str:
        if userItem == "rock" and comItem == "scissors" or userItem == "paper" and comItem == "rock" or userItem == "scissors" and comItem == "paper":
            return "win"
        elif userItem == "rock" and comItem == "paper" or userItem == "paper" and comItem == "scissors" or userItem == "scissors" and comItem == "rock":
            return "lose"
        else:
            return "draw"


    def play(self) -> str:
        userInput = self.getUseritem()
        comInput = self.getComputerItem()

        return self.getGameResult(userInput, comInput)
    





