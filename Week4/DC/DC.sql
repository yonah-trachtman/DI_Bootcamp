-- Instructions

-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
SELECT COUNT(actor_id)
FROM actors; 
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
--such a command would throw an error as it was specified as NOT NULL