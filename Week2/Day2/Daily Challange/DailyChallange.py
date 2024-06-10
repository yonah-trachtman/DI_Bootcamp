# Challenge 1

#     Ask the user for a number and a length.
#     Create a program that prints a list of multiples of the number until the list length reaches length.

# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]


# CODE STARTS HERE!!!!
numberList = []
yourNumber = input("Please input a number ")
yourRange = input("Now please give me a langth")

if yourNumber.isdigit() == True and yourRange.isdigit():
    yourNumber = int(yourNumber)
    yourRange = int(yourRange)
    for i in range(yourRange):
        addedNumber = yourNumber * (i + 1)
        numberList.append(addedNumber)
print(numberList)



# Challenge 2

#     Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).


repeatingText = input("please input a word with extra ")
index = 0

saveWord = (list(repeatingText))
writeWord = []

for letter in saveWord:


    if letter != saveWord[index - 1]:
        writeWord.append(letter)
    elif index == 0:
        writeWord.append(letter)
    index += 1

    

finalWord = "".join(writeWord)
print(finalWord)
      



