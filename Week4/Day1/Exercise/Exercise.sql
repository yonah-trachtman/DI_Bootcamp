-- Add two tables:

--     items
--     customers.
------------------------------
-- CREATE TABLE items(
--  item_id SERIAL PRIMARY KEY,
--  item_name VARCHAR (30) NOT NULL,
--  item_price integer NOT NULL);


-- CREATE TABLE customers(
--  customer_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL);
---------------------------------



-- Add the following items to the items table:

--     1 - Small Desk – 100 (ie. price)
--     2 - Large desk – 300
--     3 - Fan – 80
--------------------------------------------
-- INSERT INTO items (item_name, item_price)
-- VALUES('Small Desk', 100),
-- ('Large Desk', 300),
-- ('fan', 80);
--------------------------------------------


-- Add 5 new customers to the customers table:

--     1 - Greg - Jones
--     2 - Sandra - Jones
--     3 - Scott - Scott
--     4 - Trevor - Green
--     5 - Melanie - Johnson
-------------------------------------------------
-- INSERT INTO customers (first_name, last_name)
-- VALUES('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');
--------------------------------------------------


-- Use SQL to fetch the following data from the database:


--     All the items.
-- select * from items



--     All the items with a price above 80 (80 not included).
-- SELECT * FROM items
-- WHERE item_price > 80


--     All the items with a price below 300. (300 included)
-- SELECT * FROM items
-- WHERE item_price < 301


--     All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers
-- WHERE last_name = 'Smith'


--     All customers whose last name is ‘Jones’.
-- SELECT * FROM customers
-- WHERE last_name = 'Jones'


--     All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers
-- WHERE last_name != 'Scott'
