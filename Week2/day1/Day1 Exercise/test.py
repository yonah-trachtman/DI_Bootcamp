print ("pick a number")
number = input ()


if  int(number) % 5 == 0 and int(number) % 3 == 0:
    print (str(number) + "FizzBuzz")
elif int(number) % 5 == 0:
    print (str(number) + "Buzz")
elif int(number) % 3 == 0:
    print ( "Fizz")
else:
    print ("something went wrong")