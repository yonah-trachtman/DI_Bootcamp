# Instructions

# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!


# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:
# 7 	i 	i
# T 	s 	x
# h 	% 	?
# i 		#
# s 	M 	
# $ 	a 	
# # 	t 	%
# ^ 	r 	!


# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string


# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

# Hint (if needed) : Look at the remote learning “Matrix” videos



# sampleMatrix = '''  
#                     7ii
#                     Tsx
#                     h%?
#                     i #
#                     sM 
#                     $a 
#                     #t%
#                     ^r!
#                     '''
# matrixList = []

# Code starts here!!!!
sampleMatrix = [
    ["7", "T", "h", "i", "s", "$", "#", "^"],
    ["i", "s", "%", " ", "M", "a", "t", "r"],
    ["i", "x", "?", "#", " ", " ", "%", "!"]]








def matrixSolve(matrix):
    prev = 0
    message = []
    for column in matrix:
        for i, ele in enumerate(column):
            if ele.isalpha() == True:
                message.append(ele)
            elif column.index(ele) == 0:
                continue
            elif message[prev - 1] == " ":
                continue
            else:
                message.append(" ")
            prev += 1
    print("".join(message))

matrixSolve(sampleMatrix)