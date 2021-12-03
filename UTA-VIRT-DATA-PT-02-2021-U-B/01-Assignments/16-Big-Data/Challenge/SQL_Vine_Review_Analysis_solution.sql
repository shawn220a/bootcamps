-- 1. Filter the vine table where there are 20 or more total votes 
-- and place the results in a new table. 
SELECT *
INTO total_votes_filtered
FROM vine_table
WHERE total_votes >=20;

-- 2. Filter the new table where the precentage of helpful votes
-- is equal to or greater than 50% and put the results in a new table. 
SELECT *
INTO helpful_votes_over_50
FROM total_votes_filtered
WHERE CAST(helpful_votes AS float)/CAST(total_votes AS float) >=0.5;

--  3. Filter the helpful votes equal to or greater than 50% 
--  to get the rows where there is a vine review, vine="Y"
--  and put the results in a new table.
SELECT * 
INTO paid_reviews
FROM helpful_votes_over_50
WHERE vine = 'Y';

-- 4. Filter the helpful votes equal to or greater than 50% 
--  to get the rows where there is not a vine review, vine="N"
--  and put the results in a new table.
SELECT * 
INTO unpaid_reviews
FROM helpful_votes_over_50
WHERE vine = 'N';

-- 5. 
-- In these steps we:
-- Create 2 tables to hold the total paid reviews total paid 5 star reviews, respectively.
-- Insert the counts and then join the two tables as a new table.
-- Join the two tables 
-- Create a new table with the data from the joined tables and calculate the percentage. 


-- a. Create a table to hold the count of total paid reviews.
CREATE TABLE total_paid_reviews (
    total_reviews int);
	
-- b. Create a table to hold the count of total paid 5 star reviews.
CREATE TABLE five_star_paid_reviews (
    total_5_star_reviews int);

-- c. Insert the the count of total paid reviews into its table.
INSERT INTO total_paid_reviews(total_reviews) 
SELECT COUNT(total_votes) 
FROM paid_reviews;

-- d. Insert the count of total paid 5 star reviews into its table.
INSERT INTO five_star_paid_reviews(total_5_star_reviews) 
SELECT COUNT(star_rating)
FROM paid_reviews
WHERE star_rating= 5;

-- e. Insert the total paid reviews and total 5 star reviews into a temporary table.
SELECT tpr.total_reviews, fspr.total_5_star_reviews
INTO paid_review_temp
FROM total_paid_reviews as tpr
INNER JOIN five_star_paid_reviews as fspr ON 1 = 1;

-- f. Insert the total paid reviews and total 5 star reviews columns and 
-- calculate the percentage of total 5 star reviews 
-- and insert all into a paid review analysis table.
SELECT total_reviews, total_5_star_reviews,
	CAST(total_5_star_reviews AS FLOAT)/ CAST(total_reviews AS FLOAT)*100 AS percent_five_star 
INTO paid_review_analysis
FROM paid_review_temp;

SELECT * FROM paid_review_analysis;


-- 6. Repeat the process above for all unpaid reviews. 

-- a. Create a table to hold the count of total unpaid reviews.
CREATE TABLE total_unpaid_reviews (
    total_reviews int);
	
-- b. Create a table to hold the count of total unpaid 5 star reviews.
CREATE TABLE five_star_unpaid_reviews (
    total_5_star_reviews int);

-- c. Insert the the count of total unpaid reviews into its table.
INSERT INTO total_unpaid_reviews(total_reviews) 
SELECT COUNT(total_votes) 
FROM unpaid_reviews;

-- d. Insert the count of total paid 5 star reviews into its table.
INSERT INTO five_star_unpaid_reviews(total_5_star_reviews) 
SELECT COUNT(star_rating)
FROM unpaid_reviews
WHERE star_rating= 5;

-- e. Insert the total paid reviews and total 5 star reviews into a temporary table.
SELECT tupr.total_reviews, fsupr.total_5_star_reviews
INTO unpaid_review_temp
FROM total_unpaid_reviews as tupr
INNER JOIN five_star_unpaid_reviews as fsupr ON 1 = 1;

-- f. Insert the total paid reviews and total 5 star reviews columns and 
-- calculate the percentage of total 5 star reviews 
-- and insert all into a paid review analysis table.
SELECT total_reviews, total_5_star_reviews,
	CAST(total_5_star_reviews AS FLOAT)/ CAST(total_reviews AS FLOAT)*100 AS percent_five_star 
INTO unpaid_review_analysis
FROM unpaid_review_temp;

SELECT * FROM unpaid_review_analysis;