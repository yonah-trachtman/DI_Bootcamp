import psycopg2
import requests
import json 


DBNAME = "exercise"
USER = "postgres"
PASSWORD = "newpassword"  
HOST = "localhost"
PORT = "5432"


connection = psycopg2.connect(
    dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
)
cursor = connection.cursor()


response = requests.get("https://restcountries.com/v3.1/all") 
print(response.status_code)
to_json = response.json()


cursor.execute("CREATE TABLE Countries (country_id serial primary key, name varchar(255), capital Varchar(255), flag varchar(255), subregion Varchar(255), population float)")
def add_item(name, capital, flag, subregion, population):
    query = f'''INSERT INTO Countries (name, capital, flag, subregion, population)
VALUES ('{name}', '{capital}', '{flag}', '{subregion}', {population}); '''
    cursor.execute(query)
    

add_item(to_json[0]['name']['common'], to_json[0]['capital'][0], to_json[0]['flag'], to_json[0]['subregion'], to_json[0]['population'])
# Repeat nine more times with the countries you want
