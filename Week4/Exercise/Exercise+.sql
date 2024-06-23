-- Create a table called students.
-- Add the following columns:

--     id
--     last_name
--     first_name
--     birth_date
--     The id must be auto_incremented.
--     Make sure to choose the correct data type for each column.
--------------------------------------
-- CREATE TABLE students(
--  id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  birth_date DATE NOT NULL);
--------------------------------------





--     To help, here is the data that you will have to insert. (How do we insert a date to a table?)

-- Here is the data:
-- id 	first_name 	last_name 	birth_date
-- 1 	Marc 	Benichou 	02/11/1998
-- 2 	Yoan 	Cohen 	03/12/2010
-- 3 	Lea 	Benichou 	27/07/1987
-- 4 	Amelia 	Dux 	07/04/1996
-- 5 	David 	Grez 	14/06/2003
-- 6 	Omer 	Simpson 	03/10/1980
-- Insert

--     Insert the data seen above to the students table. Find the most efficient way to insert the data.
--     Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).



----------------------------------------------------------------
-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- ('Marc','Benichou','1998-11-02'),
-- ('Yoan','Cohen','2010-12-03'),
-- ('Lea', 'Benichou', '1987-07-27'),
-- ('Amelia', 'Dux', '1996-04-07'),
-- ('David', 'Grez', '2003-06-14'),
-- ('Omer', 'Simpson', '1980-10-30')
----------------------------------------------------------------



-- Select

--     Fetch all of the data from the table.
-- select * from students
--     Fetch all of the students first_names and last_names.
-- select last_name, first_name from students 
--     For the following questions, only fetch the first_names and last_names of the students.
--         Fetch the student which id is equal to 2.
-- select last_name, first_name from students where id = 2
--         Fetch the student whose last_name is Benichou AND first_name is Marc.
-- select last_name, first_name from students where last_name = 'Benichou' and first_name = 'Marc'
--         Fetch the students whose last_names are Benichou OR first_names are Marc.
-- select last_name, first_name from students where last_name = 'Benichou' or first_name = 'Marc'
--         Fetch the students whose first_names contain the letter a.
-- select last_name, first_name from students where first_name ILIKE '%a%'
--         Fetch the students whose first_names start with the letter a.
-- select last_name, first_name from students where first_name ILIKE 'a%'
--         Fetch the students whose first_names end with the letter a.
-- select last_name, first_name from students where first_name ILIKE '%a'
--         Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- select last_name, first_name from students where first_name ILIKE '%a_'
--         Fetch the students whose id’s are equal to 1 AND 3 .
-- select last_name, first_name from students where id < 4 and id != 2

--     Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- SELECT * FROM students WHERE birth_date > '1999-12-31';        