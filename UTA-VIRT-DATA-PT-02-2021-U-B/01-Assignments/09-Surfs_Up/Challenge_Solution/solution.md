# Challenge Solution Grading Instructions

The objective of this challenge is for learners to gather statistical data about the months of June and December for Oahu and determine how the summer and winter seasons affect the surf and ice cream shop business. Then they'll write a report that describes the key differences in weather between June and December and provide two recommendations for further analysis.

## Deliverable 1: Determine the Summary Statistics for June

For the first deliverable, we are asking the learners to filter the `Measurement` table in the `hawaii.sqlite` database to retrieve all the temperatures for the month of June as a list, create a DataFrame from the list, and generate the summary statistics from the DataFrame. 

The learners should not find the tasks in this challenge to be difficult. In this module they have already learned to filter a table using the SQLAlchemy `extract()` function. They have also generated summary statistics in the PyBer module. 

We have provided [starter code](../Resources/SurfsUp_Challenge_starter_code.ipynb) that they should download and add to their surfs_up folder, and rename it `SurfsUp_Challenge.ipynb`. The starter code, has commented steps in the file where learners will need to add code to complete this part of the challenge.

## Deliverable 2:  Determine the Summary Statistics for December 

For the second deliverable, the learners will need to retreive all the temperatures for the month of December as a list, create a DataFrame from the list, and generate the summary statistics from the DataFrame.

The tasks in this challenge are the same as in Deliverable 1. In the [starter code](../Resources/SurfsUp_Challenge_starter_code.ipynb) we have provided steps after Deliverable 1 where learners will need to add code to complete this part of the challenge.

### Solution

We have provided the [SurfsUp Challenge solution](../Challenge_Solution/SurfsUp_Challenge_solution.ipynb) as a reference when checking learners' submission. 

## Deliverable 3: A written report for the statistical analysis

Again, the goal of the writing assignment is for learners to present their findings in a logical manner. As a reminder, learners should use appropriate grammar and structure when writing.

For the written analysis, learners should use the repository README.md to write their report. The report will contain three sections: an overview of the analysis, results, and summary.

**Overview of the analysis:** Explain the purpose of this analysis.

**Results:**  Provide a bulleted list with three major points from the two analysis deliverables. Use images as support where needed.

**Summary:** Provide a high-level summary of the results and two additional queries that they would perform to gather more weather data for June and December. Here are some examples of additional queries they could peform:
  * What are the summary statistics for each station? And, is one location particular more suitable or a new surf and ice cream shop business based on this data?
  * Does June or December have more rainy days? 
  * What is the precipitation for each station for June and December? Can certian locations be ruled out for a new surf and ice cream shop business based on this data?

The README.md document should be in the home directory of their repository. All links should be working, and images and code should be formatted and displayed where appropriate.

## Submission

Make sure they upload the following to their surfs_up GitHub repository:

1. The `SurfsUp_Challenge.ipynb` file.
2. The `hawaii.sqlite` file.
3. An updated README.md that has the written analysis.

## Grading Rubric

The [SursUp Grading Rubric](../Resources/SurfsUp_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
