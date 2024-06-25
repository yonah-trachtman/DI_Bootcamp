-- 🌟 Exercise 1: DVD Rental
-- Instructions

--     Get a list of all the languages, from the language table.

-- select * from language

--     Get a list of all films joined with their languages – select the following details : film title, description, and language name.

-- select film.title, film.description, language.name
-- from language
-- inner join film on film.language_id = language.language_id

--     Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

-- select film.title, film.description, language.name
-- from language
-- full outer join film on film.language_id = language.language_id

--     Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- create table new_film(
-- 	new_film_id serial PRIMARY KEY,
-- 	name VARCHAR(256)
-- 	)

-- INSERT INTO new_film(name)
-- VALUES ('The Princess Bride'),
-- ('Flight of Dragons'),
-- ('The Avengers'),
-- ('The Hobbit'),
-- ('Star Trek II: The Wrath of Khann'),
-- ('Star Wars Episode V: The Empire Strikes Back'),
-- ('The last Unicorn')


--     Create a new table called customer_review, which will contain film reviews that customers will make.
--     Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
--     It should have the following columns:
--         review_id – a primary key, non null, auto-increment.
--         film_id – references the new_film table. The film that is being reviewed.
--         language_id – references the language table. What language the review is in.
--         title – the title of the review.
--         score – the rating of the review (1-10).
--         review_text – the text of the review. No limit on the length.
--         last_update – when the review was last updated.


-- create table customer_review(
-- 	 review_id serial primary key not null,
-- 	 film_id int REFERENCES new_film(new_film_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	 language_id int REFERENCES language(language_id) not null,
-- 	 title VARCHAR(50) Not null,
-- 	 score int check (score >= 1 or score <= 10),
-- 	 review_text TEXT not null,
-- 	 last_update DATE not null
-- )


--     Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- insert in


-- insert into customer_review(film_id, language_id, title, score, review_text, last_update)
-- values(
-- 	(select new_film_id from new_film where name = 'The Princess Bride'), 
-- 	(select language_id from language where name = 'English'), 
-- 	'Jason R ', 
-- 	10, 
-- 	'a timeless classic, this should never be remade, the cast did great in their parts and its a very good story, worth watching now and/or later... As you wish ', 
-- 	'2024-06-25'),
-- ((select new_film_id from new_film where name = 'Flight of Dragons'), 
-- 	(select language_id from language where name = 'German'),
-- 	'Bewertung von "Flight of Dragons"',
-- 	7,
-- 	'"Flight of Dragons" ist ein animierter Fantasyfilm aus dem Jahr 1982, der die Zuschauer in eine zauberhafte Welt voller Magie und Abenteuer entführt. Der Film basiert auf dem Buch von Peter Dickinson und kombiniert atemberaubende Animationen mit einer fesselnden Handlung. Die Geschichte dreht sich um einen modernen Mann, der in eine mittelalterliche Welt transportiert wird, um Drachen zu verstehen und die Magie zu retten. Mit einer großartigen musikalischen Untermalung und charismatischen Charakteren ist "Flight of Dragons" ein unvergessliches Erlebnis für Fantasy-Fans jeden Alters. Trotz einiger veralteter Animationstechniken bleibt der Film ein zeitloser Klassiker.',
-- 	'2024-06-25'
-- 	)


--     Delete a film that has a review from the new_film table, what happens to the customer_review table?


-- select * from customer_review

-- DELETE FROM new_film WHERE name = 'Flight of Dragons'


-- 🌟 Exercise 2 : DVD Rental
-- Instructions

--     Use UPDATE to change the language of some films. Make sure that you use valid languages.


-- UPDATE film
-- SET language_id = 6
-- WHERE title = 'Daughter Madigan' ;


--     Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?


--  store_id and address_id these need to be fetched from the store and address respectively when we insert into customer


--     We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?


-- DROP TABLE customer_review;
-- it was simple


--     Find out how many rentals are still outstanding (ie. have not been returned to the store yet).


-- select * from rental where return_date is null


--     Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)


-- select rental.rental_id, film.title, film.replacement_cost
-- from rental 
-- INNER JOIN inventory on inventory.inventory_id = rental.inventory_id
-- INNER JOIN film on film.film_id = inventory.film_id
-- where rental.return_date is null ORDER BY film.replacement_cost desc LIMIT 30


--     Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--         The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.


-- select film.title, film.description
-- from film
-- join film_actor on film.film_id = film_actor.film_id
-- join actor on actor.actor_id = film_actor.actor_id
-- where actor.first_name = 'Penelope' and actor.last_name = 'Monroe' and film.description ilike '%sumo%'


--         The 2nd film : A short documentary (less than 1 hour long), rated “R”.


-- select film.title, film.description
-- from film
-- join film_category on film.film_id = film_category.film_id
-- join category on film_category.category_id = category.category_id
-- where film.length < 60 and film.rating = 'R' and category.name = 'Documentary'

--         The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.


-- select film.title, film.description, rental.rental_date, rental.return_date
-- from film
-- inner join inventory on film.film_id = inventory.film_id
-- inner join rental on rental.inventory_id = inventory.inventory_id
-- inner join customer on customer.customer_id = rental.customer_id
-- where customer.first_name = 'Matthew' 
-- and customer.last_name = 'Mahan'
-- AND rental.return_date > '2005-07-28'  
-- AND rental.return_date < '2005-08-01'
-- AND film.rental_rate > 4.00

--         The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.


-- select film.title, film.description,
-- from film
-- join inventory on film.film_id = inventory.film_id
-- join rental on rental.inventory_id = inventory.inventory_id
-- join customer on customer.customer_id = rental.customer_id
-- where film.title ilike '%boat%' or film.description ilike '%boat%'
-- AND customer.first_name = 'Matthew' 
-- and customer.last_name = 'Mahan'
-- order BY film.replacement_cost desc
