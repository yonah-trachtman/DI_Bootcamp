# Part 2

#     Create a file called menu_editor.py , which will have the following functions:
#         show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
#             View an Item (V)
#             Add an Item (A)
#             Delete an Item (D)
#             Update an Item (U)
#             Show the Menu (S)
#             Call the appropriate function that matches the user’s input.

#         add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#             If the item was added successfully print a message which states: item was added successfully.

#         remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#             If the item was deleted successfully – print a message to let the user know this was completed.
#             If not – print a message which states that there was an error.

#         update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#             If the item was updated successfully – print a message to let the user know this was completed.
#             If not – print a message which states that there was an error.

#         show_restaurant_menu() - print the restaurant’s menu.

#     When the user chooses to exit the program, display the restaurant menu and exit the program.
from menu_item import MenuItem
from menu_manager import MenuManager
import psycopg2


DBNAME = "exercise"
USER = "postgres"
PASSWORD = "newpassword"  
HOST = "localhost"
PORT = "5432"


connection = psycopg2.connect(
    dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
)


cursor = connection.cursor()




def show_user_menu():
    user_input = input( f'''Welcome to ---- please choose 
View an Item (V)
Add an Item (A)
Delete an Item (D)
Update an Item (U)
Show the Menu (S)
type in anything else to exit
                       ''')
    final_input = user_input.upper()
    if final_input == "V":
        item_input = input("Please input the item you'd like to view: ")
        item = MenuManager.get_by_name(item_input)
        if item == None:
            print("Sorry we don't have that item")
        else:
            print(f"here's the Item you asked for: {item}")
    elif final_input == "A": 
        add_item_to_menu()
    elif final_input == "D":
        remove_item_from_menu()
    elif final_input == "U":
        update_item_from_menu()
    elif final_input == "S":
        show_restaurant_menu()
    else: 
        item = MenuManager.all_items()
        print("Alright see you next time")
        for i in item:
            print(i)
        return 0
    
    

def add_item_to_menu():
    newItem = input("please input the item you wish to add: ")
    newPrice = input("and now the price: ")
    newItem.strip()
    newPrice.strip()
    if newPrice.isdigit() == True: 
        item_to_add = MenuItem(newItem, int(newPrice))
        item_to_add.save()
        print (f"we added {newItem} with a price of {newPrice}")
    else:
        print("Sorry that's not a valid price")
def remove_item_from_menu():
    newItem = input("please input the item you wish to remove: ")
    newItem.strip() 
    item_to_remove = MenuItem(newItem, 0)
    try:
        item_to_remove.delete()
    except:
        print("sorry an error occurred")
    else:
        print (f"we removed {newItem} from the menu")
def update_item_from_menu():
    oldItem = input("please input the item you want to update: ")
    newItem = input("please input the item you wish to add: ")
    newPrice = input("and now the price: ")
    oldItem.strip()
    newItem.strip()
    newPrice.strip()
    if newPrice.isdigit() == True: 
        item_to_add = MenuItem(newItem, int(newPrice))
        item_to_add.update(oldItem)
        print (f"we updated {oldItem} with {newItem} and the price has been updated to {newPrice}")
    else:
        print("Sorry that's not a valid price")
def show_restaurant_menu():
    item = MenuManager.all_items()
    print("Here is our menu:")
    for i in item:
        print(i)
    

while True:
    run = show_user_menu()
    if run == 0:
        break