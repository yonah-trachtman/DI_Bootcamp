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
    if len(trackBoard) == 9:
        return 2
    if "0" in trackBoard and "1" in trackBoard and "2" in trackBoard:
        if trackBoard["0"] == player and trackBoard["1"] == player and trackBoard["2"] == player:
            return 1
    if "3" in trackBoard and "4" in trackBoard and "5" in trackBoard:
        if trackBoard["3"] == player and trackBoard["4"] == player and trackBoard["5"] == player:
            return 1
    if "6" in trackBoard and "7" in trackBoard and "8" in trackBoard:
        if trackBoard["6"] == player and trackBoard["7"] == player and trackBoard["8"] == player:
            return 1
    if "0" in trackBoard and "3" in trackBoard and "6" in trackBoard:
        if trackBoard["0"] == player and trackBoard["3"] == player and trackBoard["6"] == player:
            return 1
    if "1" in trackBoard and "4" in trackBoard and "7" in trackBoard:
        if trackBoard["1"] == player and trackBoard["4"] == player and trackBoard["7"] == player:
            return 1
    if "2" in trackBoard and "5" in trackBoard and "8" in trackBoard:
        if trackBoard["2"] == player and trackBoard["5"] == player and trackBoard["8"] == player:
            return 1
    if "0" in trackBoard and "4" in trackBoard and "8" in trackBoard:
        if trackBoard["0"] == player and trackBoard["4"] == player and trackBoard["8"] == player:
            return 1
    if "2" in trackBoard and "4" in trackBoard and "6" in trackBoard:
        if trackBoard["2"] == player and trackBoard["4"] == player and trackBoard["6"] == player:
            return 1
    else:
        return 0


def playGame():
    gameOn = True
    player = 'X'
    gameOutcome = 0
    displayBoard()
    while gameOn == True:
        playerInput = input(f"it's {player}'s turn. Choose a space by the number: ")
        if playerInput.isdigit() == True and len(playerInput) == 1:
            updateBoard(player, playerInput)
        else:
            print("sorry that's not a valid number")
            continue
        displayBoard()
        gameOutcome = gameOver(player)
        if gameOutcome == 1:
            gameOn = False
            print(f"{player} is the winner")
        elif gameOutcome == 2:
            gameOn = False
            print("it's a draw")
        else:
            if player == "X":
                player = "O"
            else:
                player = "X"




playGame()