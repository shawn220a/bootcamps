SELECT
  -- Select the columns from both tables --
  books.book_name AS book_name, prices.price AS price
FROM books
  -- Defines relationship between two tables --
JOIN prices ON books.price = prices.id;
