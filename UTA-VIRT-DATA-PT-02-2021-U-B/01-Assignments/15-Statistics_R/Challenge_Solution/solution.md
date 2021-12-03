# Challenge Solution Grading Instructions

The objective of this challenge is for learners to use R to design and interpret a multiple linear regression analysis, calculate summary statistics and t-tests, and provide an interpretation of these results. Finally, they'll design their own statistical study to compare vehicle performance of two vehicles of the MechaCar vehicles against vehicles from other manufacturers.

## Deliverable 1: Linear Regression to Predict MPG

For the first deliverable, we are asking the learners to perform linear regression that predicts the mpg of MechaCar prototypes using variables within the `MechaCar_mpg.csv` file, and then provide a summary of their interpretation of the results.

The learners should not find the tasks in this deliverable to be difficult since linear regression was covered in Lesson 15.7.2 and Lesson 15.7.3.

They'll need to add the `MechaCar_mpg.csv` file as a data frame, perform linear regression using the `lm()` function with the variables they want to use. Then using `summary()` function they'll calculate the p-value and r-squared value for the linear regression model. 

## Deliverable 2: Summary Statistics on Suspension Coils

For the second deliverable, the learners will create a summary statistics table that has the mean, median, variance, and standard deviation for all the manufacturing lots and for each lot's suspension coil’s pounds-per-square inch (PSI) variable, and then provide a summary of their interpretation of the results.  

The learners should not find the tasks in this deliverable to be difficult. They'll need to use the `group_by()` and `summarize()` functions, which have covered in Lesson 15.2.5.

For the first part, they'll need to add the `Suspension_Coil.csv` file as a data frame, and then use the `summarize()` function to get the mean, median, variance, and standard deviation on the PSI column.   

For the second part, they'll need to calculate the total summary statistics on the PSI column for each Manufacturing lot. First, they'll need to use the `group_by()` function to create a table with the each lot, and use the `summarize()` function to get the mean, median, variance, and standard deviation of the suspension coil’s PSI as the columns for each lot.  

## Deliverable 3: T-Tests on Suspension Coils

For this deliverable the learners will perform a t-test to to determine if all Manufacturing lots and each lot are statistically different from the mean population results of 1,500 pounds per square inch, and then provide a summary of their interpretation of the results. 

This deliverable may be a bit more challenging. For the first part, the learners will need to write a t-test using the `t.test()` function to determine the if the PSI for all Manufacturing lots are statistically different from the mean population of 1,500 pounds per square inch. 

Next, they'll need to perform three separate t-test on a "subset" of the data, which are the three manufacturing lots. For this part of the deliverable we have provided a **Hint** for the students to help them determine how to writer their RScript. 

## Deliverable 4: Design a Study Comparing the MechaCar to the Competition

For this deliverable the learners will use their knowledge of R and design a statistical study to compare vehicle performance of the MechaCar vehicles against vehicles from other manufacturers.  

The learners will need to write up a short description of a statistical study that can quantify how the MechaCar outperforms the competition. In the study design, they will need to think critically about what metrics that would be of interest to a consumer. We have provide some examples like, cost, city or highway fuel efficiency, horse power, maintenance cost, or safety rating. 

In their description they should address the following questions:
* What is the metric or metrics you are going to test?
* What is the null and alternative hypothesis? 
* What statistical test would you use to test the hypothesis? And why? 
* What data is needed to run the statistical test?

## Solution Files

We have provided the [RScript coding solution](MechaCarChallenge.RScript) as a reference when checking learners' coding submission. And, [summary examples](MechaCarWriteUp.txt) as a reference to some examples of the summaries when checking learners' written summaries.

## Submission

Make sure they upload the following to their MechaCar_Statistical_Analysis GitHub repository:

1. Their `MechaCarChallenge.RScript` file.
2. An updated README.md that has the written summary of the three technical deliverables and your statistical study design comparing vehicle performance of the MechaCar vehicles against vehicles from other manufacturers.

## Grading Rubric

The [MechaCar Grading Rubric](../Resources/MechaCar_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
