# tic-tac-toe

# Instructions

#     The game is played on a grid that’s 3 squares by 3 squares.
#     Players take turns putting their marks (O or X) in empty squares.
#     The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
#     When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


# code starts here!!!!

topRow = ["-","-","-"]
middleRow = ["-","-","-"]
bottomRow = ["-","-","-"]

def displayBoard():
    print(topRow)
    print(middleRow)
    print(bottomRow)


def player_input(player):
    column = input(f"{player} player which column do you want to place in? ")
    row = input("and what row do you want to put it in? ")



def check_win():