# In the file menu_manager.py, create a new class called MenuManager

#     Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

#     Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.
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


class MenuManager():
    def get_by_name(name):
        query = f"SELECT item_name FROM menu_items WHERE item_name = '{name}'"
        cursor.execute(query)
        results = cursor.fetchall()
        if len(results) < 1:
            return None
        elif name in results[0]:
            return name
            
        
    
    def all_items():
        list_of_items = []
        query = f"SELECT item_name FROM menu_items"
        cursor.execute(query)
        results = cursor.fetchall()
        for value in results:
            list_of_items.append(value)
            return list_of_items



