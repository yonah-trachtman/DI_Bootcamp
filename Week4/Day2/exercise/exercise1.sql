-- Use SQL to get the following from the database:

--     All items, ordered by price (lowest to highest).

-- SELECT * FROM items
-- ORDER BY item_price ; 

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).

-- SELECT * FROM items
--  where item_price >= 80 ORDER BY item_price desc; 


-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.

-- select first_name, last_name from customers
-- where customer_id < 4 ORDER BY first_name


-- All last names (no other columns!), in reverse alphabetical order (Z-A)

-- select last_name from customers
--  ORDER BY last_name desc;