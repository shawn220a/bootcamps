# Challenge Solution Grading Instructions

The objective of this challenge is for learners to create additional two intermediate tables and a final table that contains the total number of employees by title that will be retiring based on their birth date. they'll also create a table that of employees who are still employed and born withing a certain year that are eligible to participate in a mentorship program. Finally, the learners will write a report on the results of the analysis.

## Deliverable 1: The number of retiring employees by title

For the first deliverable, we are asking the learners to create three tables.

* For the first table, they'll need to retrieve the `emp_no`, `first_name` and `last_name` columns from the employees table employees, and the the `title`, `from_date` and `to_date` columns from the titles table. They'll need to join the two tables on the primary key and then filter the data for those employees born between January 1, 1952 and December 31, 1955. The data should be saved as a new table, and exported as `retirement_titles.csv` into the Data folder of their Pewlett-Hackard-Analysis folder.

* The retirement titles table will have duplicate entries for some employees because they have switched titles over the years. These duplicate entries will be handled in the next table.

![The retirement table with employee number, first name, last name, title, the title from and to dates, and ordered by employee number.](../Resources/retirement_titles.png)

* For the second table, we have provided [starter code](../Resources/Employee_Challenge_starter_code.sql) that they should download, copy and paste into their `Employee_Challenge_starter_code.sql` file. Using this starter code, the learners will need to retrieve retrieve the `emp_no`, `first_name`, `last_name` and `title` columns from the retirement titles table they just created.

* Using the the `DISTINCT ON` statement they should get the first occurrence of the employee number in the `ON ()` clause for each set of rows.  We have provided a hint that links to documentation on how to use the `DISTINCT ON` statement.

* The data should sorted in ascending order by the employee number and descending order for the last date (i.e., `to_date`) of the most recent title. Lastly, data should be saved as a new table, and exported as `unique_titles.csv` into the Data folder of their Pewlett-Hackard-Analysis folder.

![The unique titles table sorted by employee number and the recent title date in descending order.](../Resources/unique_titles.png)

* For the final table, the learners will have to retrieve the number of employees by recent job title who are about to retire.

* To get the number of employees by job title they will need to retrieve the number of titles from unique titles table. Then the data should be grouped by titles and sorted by the number of titles in descending order, and added to a new table, then exported as `retiring_titles.csv` into the Data folder of their Pewlett-Hackard-Analysis folder.

![The retiring title table ordered by title and sorted by count in descending order.](../Resources/retirement_titles.png)

## Deliverable 2: The eligible employees for the mentorship program

For the second deliverable, the learners will need to create a mentorship eligibility table that holds the employees who are currently employed and born between January 1, 1965 and December 31, 1965.

* For this table, they'll need to retrieve the `emp_no`, `first_name`, `last_name`, and `birth_date` columns from the employees table, the `from_date` and `to_date` columns from the department employee table, and the `title` column from the titles table. They'll also have to use the the `DISTINCT ON` statement to get the first occurrence of the employee number in the `ON ()` clause for each set of rows.

* Next, they'll need to perform two `INNER JOIN` statements. The first will join the employees and the department employee tables on the primary key, and the second will join the employees and the titles tables on the primary key. Then, they'll need to filter the data on the `to_date` column to get current employees, and where their birth dates are between January 1, 1965 and December 31, 1965. Finally, they'll need to order the table by the employee number, and add the data to a new table, export the table as `mentorship_eligibilty.csv` into the Data folder of their Pewlett-Hackard-Analysis folder.

![The mentorship table with the employee number, first and last name, birth date, from and to date for the current title, ordered by employee number.](../Resources/mentoring_titles.png)

## Deliverable 3: A written report for the employee database analysis

Again, the goal of the writing assignment is for learners to present their findings in a logical manner. As a reminder, learners should use appropriate grammar and structure when writing.

For the written analysis, learners should use the repository README.md to write their report. The report will contain three sections: an overview of the analysis, results, and summary.

**Overview of the analysis:** Explain the purpose of this analysis.

**Results:** Provide a bulleted list with four major points from the retirement titles and the mentorship eligibility tables. Use images if necessary to support your evidence.

**Summary:** Provide a high-level summary that addresses the following questions, and then provide two additional queries or tables that can be created that will provide more insight for the upcoming "silver tsunami".
  * How many roles will need to be filled as the "silver tsunami" begins to make an impact?
  * Are there enough retirement-ready employees in the departments that are qualified to mentor the next generation of Pewlett Hackard employees?

The README.md document should be in the home directory of their repository. All links should be working, and images and code should be formatted and displayed where appropriate.

## Solution File

The SQL queries for the [Employee Database challenge solution](Employee_Database_challenge.sql), is provided for you to as a reference when checking learners' submissions.

The challenge submission should contain the `Employee_Database_challenge.sql` file in the Queries folder, the `retirement_titles.csv`, `unique_titles.csv`, `retiring_titles.csv`, and `mentorship_eligibilty.csv` files in the Data folder, and an update repository README.md that has the written analysis.

## Grading Rubric

The [Employee Database Grading Rubric](../Resources/Employee_Database_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
