# Challenge Solution Grading Instructions

The objective of this challenge is for learners to use PySpark to perform ETL on an Amazon review dataset, store the results in an AWS RDS pgAdmin database, and then use PySpark, Pandas or SQL to determine if there is any bias towards favorable reviews in the chosen dataset. Then, they'll write a summary of the analysis.

## Deliverable 1: Perform ETL on Amazon Product Reviews

For the first deliverable, we are asking the learners to pick a dataset from the [Amazon Review datasets](https://s3.amazonaws.com/amazon-reviews-pds/tsv/index.txt), extract the dataset into a DataFrame, transform the DataFrame into four separate DataFrames that match the table schema [table schema](../Resources/challenge_schema.sql), and then upload the transformed data into the appropriate tables in pgAdmin.

The learners should not find the tasks in this deliverable to be difficult since extraction, some of the transformation steps, and the loading were covered in Lessons 16.7.2, 16.7.3, and 16.9.1.

We have provided [starter code](../Resources/Amazon_Reviews_ETL_starter_code.ipynb) to assist the students with the steps needed to perform the transformation and loading. 

## Deliverable 2: Determine Bias of Vine Reviews

For the second deliverable, the learners will use PySpark, Pandas, or SQL to determine if there is any bias towards reviews that were written as part of the Vine program. For this analysis they’ll determine if there are differences in the percentage of 5 star reviews where there is a written Vine review (i.e., paid) compared to where there isn’t a written Vine review (i.e, unpaid). 

We recommend that the students use PySpark or Pandas if their SQL skills are limmited. Some of the analysis more challenging using SQL than PySpark or Pandas. 

There is no starter code for this deliverable, however we have provided some general steps to perform the analysis.

## Deliverable 3: A Written Report on the Analysis

The goal of the writing assignment is for learners to present their findings in a logical manner. As a reminder, learners should use appropriate grammar and structure when writing.

For this deliverable the learners will write a report that summarizes the analysis performed in Deliverable 2.

For the written analysis, learners will write a report that summarizes the analysis performed in Deliverable 2. The report will be written in the repository README.md and contain three sections: an overview of the analysis, results, and summary. 

**Overview of the analysis:** Explain the purpose of this analysis.

**Results:** Using bulleted lists and images as support, the learners should address the following questions.

* How many total reviews were there for a review that was or wasn’t written as part of the Vine program?
* How many 5 star reviews were there for a review that was or wasn’t written as part of the Vine program?
* What is the total percentage of 5 star reviews for or a review that was or wasn’t written as part of the Vine program?

**Summary:** In the summary, the learners should state whether there is any bias in the Vine program. They should use the results of their analysis to support their statement, and provide one additional analysis that they could do with the dataset to support their statement. 

The README.md document should be in the home directory of their repository. All links should be working, and images should be formatted and displayed where appropriate.

## Solution Files

We have provided the [Amazon Reviews ETL solution](../Challenge/Amazon_Reviews_ETL_solution.ipynb) as a reference when checking learners' coding submission for Deliverable 1. 

For Deliverable 2, we have provided the [PySpark solution](../Challenge/PySpark_Vine_Review_Analysis_solution.ipynb), the [Pandas solution](../Challenge/Pandas_Vine_Review_Analysis_solution.ipynb), and the [SQL solution](../Challenge/SQL_Vine_Review_Analysis_solution.sql) as a reference when checking learners' coding submission. 

## Submission

Make sure they upload the following to their Amazon_Vine_Analysis GitHub repository:

1. Their `Amazon_Reviews_ETL.ipynb` file.
2. Their `Vine_Review_Analysis.ipynb` or `Vine_Review_Analysis.sql` file.
3. An updated README.md that has your written analysis.

## Grading Rubric

The [Big Data Grading Rubric](../Resources/BigData_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
