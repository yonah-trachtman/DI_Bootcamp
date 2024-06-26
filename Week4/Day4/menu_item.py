# PART 1

# In this exercise we will use PostgreSQL and Python.

#     Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns
#         item_id : SERIAL PRIMARY KEY
#         item_name : VARCHAR(30) NOT NULL
#         item_price : SMALLINT DEFAULT 0

#     In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.

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




class MenuItem:
    def __init__(self, item_name: str, item_price: int) -> None:
        self.item_name = item_name
        self.item_price = item_price


# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.

    def save(self):
        query = f'''INSERT INTO menu_items (item_name, item_price)
VALUES (%s, %s); '''
        values = (self.item_name, self.item_price)
        cursor.execute(query, values)
        connection.commit()

    def delete(self):
        query = f'''DELETE FROM menu_items WHERE item_name = '{self.item_name}'; '''
        cursor.execute(query)
        connection.commit()
    
    def update(self, item_name):
        query = f"UPDATE menu_items SET item_name = '{self.item_name}', item_price = '{self.item_price}' where item_name = '{item_name}';"
        cursor.execute(query)
        connection.commit()
