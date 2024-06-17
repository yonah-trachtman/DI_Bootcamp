# Exercise 1: Bank Account
# Instructions

# Part I:

#     Create a class called BankAccount that contains the following attributes and methods:
#         balance - (an attribute)
#         __init__ : initialize the attribute
#         deposit : - (a method) accepts a positive int and adds to the balance, raise an Exception if the int is not positive.
#         withdraw : - (a method) accepts a positive int and deducts from the balance, raise an Exception if not positive


# Part II : Minimum balance account

#     Create a MinimumBalanceAccount that inherits from BankAccount.
#     Extend the __init__ method and accept a parameter called minimum_balance with a default value of 0.
#     Override the withdraw method so it only allows the user to withdraw money if the balance remains higher than the minimum_balance, raise an Exception if not.


# Part III: Expand the bank account class

#     Add the following attributes to the BankAccount class:
#         username
#         password
#         authenticated (False by default)

#     Create a method called authenticate. This method should accept 2 strings : a username and a password. If the username and password match the attributes username and password the method should set the authenticated boolean to True.

#     Edit withdraw and deposit to only work if authenticated is set to True, if someone tries an action without being authenticated raise an Exception

class BankAccount():

    notAuthenticated = "you are not authenticated"
    def __init__(self, balance:int|float, username: str, password: str) -> None:
        self.balance = balance
        self.authenticated = False
        self.username = username
        self.password = password
        

    def deposit(self, amount: int) -> int:
        if self.authenticated:
            self.balance += amount
            return self.balance
        else:
            raise Exception(BankAccount.notAuthenticated)
    
    def withdraw(self, amount: int) -> int:
        if self.authenticated:
            self.balance -= amount
            return self.balance
        else:
            raise Exception(BankAccount.notAuthenticated)
        
    def authenticate(self, usernameinput: str, passinput: str):
        if usernameinput == self.username and passinput == self.password:
            self. authenticated = True
    



class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance: int | float, username: str, password: str, minimumBalance:int|float = 0) -> None:
        super().__init__(balance, username, password)
        self.minbalance = minimumBalance
    
    def withdraw(self, amount: int) -> int:
        if self.balance > self.minbalance and self.authenticated:
            self.balance -= amount
            return self.balance
        else:
            raise Exception("going below minimum balance")