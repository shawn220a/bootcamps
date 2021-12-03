# Challenge Solution Grading Instructions

The objective of this challenge is for learners to replace the reading and math scores of the ninth graders at Thomas High School with `NaN` using the `loc` method with conditional statements and comparison or logical operators.  Then the learners will need to repeat the school district analysis they did in the module but this time they'll have to take into account that the ninth graders at Thomas High School can't be included to calculate the district summary and school summary passing percentages. Finally, the learners will write a report describing how the replacement of the reading and math scores affected the overall school district analysis compared to the original analysis.

## Deliverable 1: Replace ninth grade reading and math scores

For the first deliverable, we are asking the learners to use the `loc` method with conditional statements and comparison or logical operators to retrieve the reading and math scores of the ninth graders at Thomas High School. Once they do that they will need to replace the scores with `NaN` using `np.nan`.

We have provided the learners with a [PyCitySchools Challenge starter code](../Resources/PyCitySchools_Challenge_starter_code.ipynb) that has comments as to where the learners will need to add code to complete this part of the challenge.

We are instructing the learners to make a copy of the `PyCitySchools.ipynb` file, renaming it `PyCitySchools_Challenge.ipynb`, and then copying the code from the `PyCitySchools Challenge starter code` and pasting into the top of the `PyCitySchools_Challenge.ipynb`file. This will make it easier for them to complete Deliverable 2.

## Deliverable 2: Repeat the school district analysis

For the second deliverable, we are asking the learners to rerun the school district analysis they did in the module. They will need to reanalyze the following:

* The district summary
* The school summary
* The top 5 and bottom 5 performing schools, based on the overall passing rate.
* The average math score for each grade level from each school.
* The average reading score for each grade level from each school.
* The scores by school spending per student, by school size, and by school type.

For the district summary, they'll need to recalculate the total student count by subtracting the number of ninth grade students in Thomas High School from the total student count, then they'll recalculate the passing math and passing reading percentages, and the overall passing percentage with the recalculated total student count. 

For the school summary, they'll execute the code from this module that creates and formats the School Summary DataFrame, then they'll need to update the school summary using the 10th-12th graders from Thomas High School as follows:

* First, they’ll calculate the number of 10th-12th graders in Thomas High School.
* Next, they'll need to create three new DataFrames for the 10th-12th graders from Thomas High School. Students who passed math, students who passed reading, and students who passed both math and reading. 
* Using these DataFrames, they'll calculate the percentage of students that passed math, passed reading, and passed both math and reading by using the number of students in the 10th-12th grade.
* Finally, they'll replace the `% Passing Math`, `% Passing Reading`, and `% Overall Passing` scores with the new passing percentages.

In the [starter code](../Resources/PyCitySchools_Challenge_starter_code.ipynb) we have added code to that creates the District Summary and School Summary and has comments as to where the learners will need to add code to complete this part of the challenge.

The remaining metrics should be analyzed as they were in the module. We have add sections in the [starter code](../Resources/PyCitySchools_Challenge_starter_code.ipynb) for them to copy and paste their code from the module. 

## Deliverable 3: Written a report for the school district analysis in the repository README.md

Again, the goal of the writing assignment is for learners to present their findings in a logical manner. As a reminder, learners should use appropriate grammar and structure when writing.

For the written analysis, learners should use the repository README.md to write their report. The report will contain three sections: anOverview of the school district analysis, results, and summary.

**Overview of the school district analysis:** Explain the purpose of this analysis.

**Results:** Using a bulleted list, address the following questions. Use images and examples of your code if necessary to support your evidence.

* How is the district summary affected?
* How is the school summary affected?
* How does replacing the ninth graders’ math and reading scores affect Thomas High School’s performance, relative to the other schools?
* How does replacing the ninth grade scores affect the following:

  * Math and Reading Scores by Grade
  * Scores by School Spending
  * Scores by School Size
  * Scores by School Type

**Summary:** Give a high-level summary of the three to four of most striking changes to the school district analysis after replacing the reading and math scores for the ninth grade at Thomas High School with NaN.

The README.md document should be in the home directory of their repository. All links should be working, and images and code should be formatted and displayed where appropriate.

## Solution File

The final solution, [PyCitySchools challenge solution](PyCitySchools_Challenge_solution.ipynb), is provided for you to as a reference when checking learners' submissions.

The challenge submission should contain the `PyCitySchools_Challenge_solution.ipynb` file, the the “Resources” folder with the `students_complete.csv` and the `school_complete.csv` file, and an update repository README.md that has the written analysis.

## Grading Rubric

The [PyCitySchools Grading Rubric](../Resources/PyCitySchools_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
