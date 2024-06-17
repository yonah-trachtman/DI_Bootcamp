# Exercise 1 : Call History
# Instructions

#     Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.

#     Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.

#     Add a method called show_call_history. This method should print the call_history.

#     Add another attribute called messages to your __init__() method which value is an empty list.

#     Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
#         to : the number of another Phone object
#         from : your phone number (also a Phone object)
#         content

#     Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

#     Test your code !!!



class Phone:

    def __init__(self, phoneNumber: str) -> None:
        self.number = phoneNumber
        self.callHistory = []
        self.messages = []
    
    def showCallHistory(self) -> None:
        print(self.callHistory)

    def call(self, otherPhone) -> None:
        whoCalledWho = f"{self.number} called {otherPhone.number}"

        self.callHistory.append(whoCalledWho)
    
    def sendMessage(self, otherPhone, content: str) -> None:
        message = content
        newMessage = { 
            "from" : self.number, 
            "to" : otherPhone.number,
            "Content" : message
                      }
        self.messages.append(newMessage)