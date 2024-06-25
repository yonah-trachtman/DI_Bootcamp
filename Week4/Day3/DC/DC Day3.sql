-- Part I

--     Create 2 tables : Customer and Customer profile. They have a One to One relationship.
--         A customer can have only one profile, and a profile belongs to only one customer
--         The Customer table should have the columns : id, first_name, last_name NOT NULL
--         The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)


-- create table Customer(
-- 	customer_id serial primary key,
-- 	first_name VARCHAR (30) not NULL,
-- 	last_name VARCHAR (60) not NULL
-- );

-- create table Customer_Profile (
-- 	profile_id serial primary Key,
-- 	is_logged_in boolean DEFAULT false,
-- 	customer_id int references Customer(customer_id) on delete cascade not null unique 
--  );


--     Insert those customers
--         John, Doe
--         Jerome, Lalu
--         Lea, Rive


-- insert into Customer(first_name, last_name)
-- values ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')


--     Insert those customer profiles, use subqueries
--         John is loggedIn
--         Jerome is not logged in


-- insert into Customer_Profile(is_logged_in, customer_id)
-- values(True, (select customer_id from Customer where first_name = 'John')),
-- (default, (select customer_id from Customer where first_name = 'Jerome'))


--     Use the relevant types of Joins to display:
--         The first_name of the LoggedIn customers

-- SELECT Customer.first_name, Customer_Profile.is_logged_in
-- FROM Customer_Profile
-- INNER JOIN Customer ON  Customer.customer_id = Customer_Profile.customer_id where is_logged_in = true

--         All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

-- SELECT Customer.first_name, Customer_Profile.is_logged_in
-- FROM Customer_Profile
-- full outer JOIN Customer ON  Customer.customer_id = Customer_Profile.customer_id

--         The number of customers that are not LoggedIn

-- SELECT  COUNT (Customer_Profile.is_logged_in)
-- FROM Customer_Profile
-- where is_logged_in = false




-- Part II:

--     Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL


-- Create table book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title Varchar(50) NOT NULL,
-- 	author Varchar(20) NOT NULL
-- )


--     Insert those books :
--         Alice In Wonderland, Lewis Carroll
--         Harry Potter, J.K Rowling
--         To kill a mockingbird, Harper Lee


-- insert into book (title, author)
-- values('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')


--     Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);


-- Create table student (
-- 	student_id SERIAL PRIMARY KEY, 
-- 	name VARCHAR(100) NOT NULL UNIQUE, 
-- 	age int not null check (age <= 15)
-- )


--     Insert those students:
--         John, 12
--         Lera, 11
--         Patrick, 10
--         Bob, 14


-- insert into student (name, age)
-- values('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14)


--     Create a table named Library, with the columns :
--         book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
--         student_id ON DELETE CASCADE ON UPDATE CASCADE
--         borrowed_date
--         This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
--         book_fk_id is a Foreign Key representing the column book_id from the Book table
--         student_fk_id is a Foreign Key representing the column student_id from the Student table
--         The pair of Foreign Keys is the Primary Key of the Junction Table


-- create table library ( 
-- 	book_fk_id int references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE, 
-- 	student_id int references student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date date not null,
-- 	primary key (book_fk_id, student_id)
-- 	)


--     Add 4 records in the junction table, use subqueries.
--         the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
--         the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
--         the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
--         the student named Bob, borrowed the book Harry Potter the on 12/08/2021


-- insert into library (book_fk_id, student_id, borrowed_date)
-- values ((select book_id from book where title = 'Alice In Wonderland'), (select student_id from student where name = 'John'), '2022-02-15'),
-- ((select book_id from book where title = 'To kill a mockingbird'), (select student_id from student where name = 'Bob'), '2021-03-03'),
-- ((select book_id from book where title = 'Alice In Wonderland'), (select student_id from student where name = 'Lera'), '2021-05-23'),
-- ((select book_id from book where title = 'Harry Potter'), (select student_id from student where name = 'Bob'), '2021-08-12')


--     Display the data
--         Select all the columns from the junction table

-- select * from library

--         Select the name of the student and the title of the borrowed books

-- select student.name, book.title, library.borrowed_date
-- from library
-- join book 
-- on book.book_id = library.book_fk_id
-- join student 
-- on student.student_id = library.student_id;

--         Select the average age of the children, that borrowed the book Alice in Wonderland

-- select avg(student.age)
-- from library
-- join book
-- on book.book_id = library.book_fk_id
-- join student 
-- on student.student_id = library.student_id 
-- where book.title = 'Alice In Wonderland'

--         Delete a student from the Student table, what happened in the junction table ?

-- DELETE FROM student WHERE name = 'Bob';
-- select student.name, book.title, library.borrowed_date
-- from library
-- join book 
-- on book.book_id = library.book_fk_id
-- join student 
-- on student.student_id = library.student_id;


