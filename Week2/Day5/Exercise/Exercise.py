# tic-tac-toe

# Instructions

#     The game is played on a grid that’s 3 squares by 3 squares.
#     Players take turns putting their marks (O or X) in empty squares.
#     The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
#     When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


# code starts here!!!!


board = '''
           ***************
           *  0 | 1 | 2  *
           * ---|---|--- *  
           *  3 | 4 | 5  *
           * ---|---|--- *
           *  6 | 7 | 8  *
           ***************'
           '''
trackBoard = {}

def displayBoard():
    print(board)


def updateBoard(player, position):
    global board
    for i in board:
        if i == position:
            trackBoard[position] = player
            board = board.replace(position, player)

def gameOver(player):
    if "0" in trackBoard and "1" in trackBoard and "2" in trackBoard:
        if trackBoard["0"] == player and trackBoard["1"] == player and trackBoard["2"] == player:
            return f"{player} wins"
    if "3" in trackBoard and "4" in trackBoard and "5" in trackBoard:
        if trackBoard["3"] == player and trackBoard["4"] == player and trackBoard["5"] == player:
            return f"{player} wins"
    if "6" in trackBoard and "7" in trackBoard and "8" in trackBoard:
        if trackBoard["6"] == player and trackBoard["7"] == player and trackBoard["8"] == player:
            return f"{player} wins"
    if "0" in trackBoard and "3" in trackBoard and "6" in trackBoard:
        if trackBoard["0"] == player and trackBoard["3"] == player and trackBoard["6"] == player:
            return f"{player} wins"
    if "1" in trackBoard and "4" in trackBoard and "7" in trackBoard:
        if trackBoard["1"] == player and trackBoard["4"] == player and trackBoard["7"] == player:
            return f"{player} wins"
    if "2" in trackBoard and "5" in trackBoard and "8" in trackBoard:
        if trackBoard["2"] == player and trackBoard["5"] == player and trackBoard["8"] == player:
            return f"{player} wins"
    if "0" in trackBoard and "4" in trackBoard and "8" in trackBoard:
        if trackBoard["0"] == player and trackBoard["4"] == player and trackBoard["8"] == player:
            return f"{player} wins"
    if "2" in trackBoard and "4" in trackBoard and "6" in trackBoard:
        if trackBoard["2"] == player and trackBoard["4"] == player and trackBoard["6"] == player:
            return f"{player} wins"
    elif len(trackBoard) == 9:
           return "it's a draw"
    else:
        return "Keep playing"


def playGame():
    gameOn = True
    player = 'X'
    while gameOn == True:
        displayBoard()
        playerInput = input("Choose a ")
