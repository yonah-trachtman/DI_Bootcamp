# tic-tac-toe

# Instructions

#     The game is played on a grid that’s 3 squares by 3 squares.
#     Players take turns putting their marks (O or X) in empty squares.
#     The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
#     When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


# code starts here!!!!
gameInProgress = True

topRow = ["-","-","-"]
middleRow = ["-","-","-"]
bottomRow = ["-","-","-"]

def displayBoard():
    print(topRow)
    print(middleRow)
    print(bottomRow)


def player_input(player):
    column = input(f"{player} player which column do you want to place in? ")
    row = input("and what row do you want to place in? ")



def check_win():
    winner = ""
    if all(i == topRow[0] for i in topRow) or all(i == middleRow[0] for i in middleRow) or all(i == bottomRow[0] for i in bottomRow):
        gameInProgress = False
    elif topRow[0] == middleRow[0] and topRow[0] == bottomRow[0] and bottomRow[0] == middleRow[0]:
        gameInProgress = False
    elif topRow[1] == middleRow[1] and topRow[1] == bottomRow[1] and bottomRow[1] == middleRow[1]:
        gameInProgress = False
    elif topRow[2] == middleRow[2] and topRow[2] == bottomRow[2] and bottomRow[2] == middleRow[2]:
        gameInProgress = False
    elif topRow[0] == middleRow[1] and topRow[0] == bottomRow[2] and bottomRow[2] == middleRow[1]:
        gameInProgress = False
    elif topRow[2] == middleRow[1] and topRow[2] == bottomRow[0] and bottomRow[0] == middleRow[1]:
        gameInProgress = False

    