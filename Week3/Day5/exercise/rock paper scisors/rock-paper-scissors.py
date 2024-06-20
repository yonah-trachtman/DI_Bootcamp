# Part II - rock-paper-scissors.py

#     rock-paper-scissors.py : create 3 functions
#         get_user_menu_choice() - this should display a simple menu, get the user’s choice (with data validation), and return the choice. No looping should occur here.
#         The possibles choices are : Play a new game or Show scores or Quit

#         print_results(results) – this should print the results of the games played. It should have a single parameter named results; which will be a dictionary of the results of the games played. It should display these results in a user-friendly way, and thank the user for playing.


#         Note: results should be in this form: {win: 2,loss: 4,draw: 3}. Bear in mind that this dictionary will need to be created and populated in some other part of our code, and passed in to the print_results function at the right time.

#         main() - the main function. It should take care of 3 things:
#             Displaying the menu repeatedly, until the user types in the value to exit the program: ‘x’ or ‘q’, whatever you decide. (Make use of the get_user_menu_choice function)

#             When the user chooses to play a game:
#                 Create a new Game object (see below), and call its play() function, receiving the result of the game that is returned.
#                 Remember the results of every game that is played.

#             When the user chooses to exit the program, call the print_results function in order to display a summary of all the games played.

from game import Game



def getUserMenu() -> str:
    inputOptions = ["p", "s", "q"]
    userInput = input("Welcome to Rock paper scissors, to play input (p), to check scores input (s) to quit out of the game input (q): ")
    userInput = userInput.strip()
    if userInput.isalpha():
        userInput = userInput.lower()
        if userInput in inputOptions:
            return userInput
        else:
            print("Sorry that's not a valid input")
    else:
        print("Sorry that's not a valid input") 





def printResults(results: dict) -> None:
    print(f"""Here are the results so for from this sesion
          
            Wins : {results["win"]}
            Draws : {results["draw"]}
            Losses : {results["lose"]}

We hope you're having fun""")
    



def main() -> None:
    results = {"win": 0, "draw": 0, "lose": 0}
    gameinProgress = True
    while gameinProgress:
        menu = getUserMenu()
        if menu == "q":
            print(f"Hope you had fun, see you next time here's a final summery\nWins : {results['win']}\nDraws : {results['draw']}\nLosses : {results['lose']}")
            break
        elif menu == "s":
            printResults(results)
        elif menu == "p":
            game = Game()
            userResult = game.getUseritem()
            comResult = game.getComputerItem()
            outcome = game.getGameResult(userResult, comResult)
            if outcome == "win":
                print(f"you played {userResult} and the Computer played {comResult}. You win")
            elif outcome == "draw":
                print(f"you played {userResult} and the Computer played {comResult}. It's a draw")
            elif outcome == "lose":
                print(f"you played {userResult} and the Computer played {comResult}. You lose")
            results[outcome] += 1


main()