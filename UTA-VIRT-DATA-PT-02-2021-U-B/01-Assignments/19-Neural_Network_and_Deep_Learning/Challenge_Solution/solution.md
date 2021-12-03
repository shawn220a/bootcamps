# Challenge Solution Grading Instructions

The objective of this challenge is for learners to import, analyze, clean, and preprocess a dataset, then select, design, and train a binary classification model, and optimize the model by modifying the input data and training to achieve a desired model performance. 

## Deliverable 1: Data Preprocessing for a Neural Network Model 

For the first deliverable, we are asking the learners to preprocess the charity data set in order to design a neural network of deep learning model in Deliverable 2. 

The tasks to complete this deliverable should not be challenging for the students since they have been introduced in this module. 

Although we have provided [starter code](../Resources/AlphabetSoupCharity_starter_code.ipynb) to help the students with this deliverable. They'll have to identify the target and features for thier model before they begin. Using the steps provided, the students will need to add their code to the empty input cells to get the output shown.

## Deliverable 2: Compile, Train and Evaluate the Model

For the second deliverable, the learners will design a neural network or deep learning model to create a binary classification model that can predict if an Alphabet Soup funded organization will be successful based on the features in the dataset.

Like, Deliverable 1, the learners should not find the tasks in this deliverable to be difficult since the steps needed to completed this deliverable are covered in Lessons 19.4.4 and 19.4.5. 

However, they must think about how many inputs there are before determining the number of neurons and layers to add to their model.  When they have completed that step, they’ll need to compile, train, and evaluate the binary classification model to calculate the model’s loss and accuracy. 

We have provided steps in the [starter code](../Resources/AlphabetSoupCharity_starter_code.ipynb), that includes hints based on the outputs that should help them complete this part of the challenge. 

Before they evaluate the model they'll need to create a callback that saves the model's weights every 5 epochs. And, after they evaluate the model, they'll need to save the results to a HDF5 file. 

## Deliverable 3: Optimize the Model

For the third deliverable, the learners will have to optimize the model in Deliverable 3 to achieve a target predictive accuracy greater than 75%. If they can't achieve greater than 75% accuracy they'll need to make at three attempts to optimize the model.

**NOTE:** The accuracy for the solution after completing Deliverable 1 and 2, based on the requirements, is less than 75%, which was done on purpose so the students can learn to optimize the model for themselves. 

This part of the challenge may be the hardest for some learners as they'll have to use trial and error to optimize the model.  They can use the suggestions we have provided as well as the information in Lesson 19.2.6.  

Make sure they are aware that they should create a callback that saves the model's weights every 5 epochs. And, after they evaluate the model, they'll need to save the results to a HDF5 file. 

## Deliverable 4: A Written Report on the Neural Network Model

The goal of the writing assignment is for learners to present their findings in a logical manner. As a reminder, learners should use appropriate grammar and structure when writing.

For this deliverable the learners will write a report on the performance of the deep learning model they created for AlphabetSoup, in Deliverable 3. The report will be written in the repository README.md and contain three sections: an overview of the analysis, results, and summary. 

**Overview of the analysis:** Explain the purpose of this analysis.

**Results:** Using bulleted lists and images to support your answers, address the following questions. 
* *Data Preprocessing*
    * What variable(s) are considered the target for your model?
    * What variable(s) are considered to be the features for your model?
    * What variable(s) are neither and should be removed from the input data? 
* *Compiling, Training, and Evaluating the Model*
    * How many neurons and layers did you select for your neural network model, and why?
    * Were you able to achieve the target model performance?
    * What steps did you take to try and increase model performance? 

**Summary:** Summarize the overall results of the deep learning model and include a recommendation of a different model you would use to solve this classification problem, and why?

The README.md document should be in the home directory of their repository. All links should be working, and images should be formatted and displayed where appropriate.

## Solution Files

We have provided the [AlphabetSoupCharity solution](../Solution/AlphabetSoupCharity_solution.ipynb) as a reference when checking learners' coding submission for Deliverable 1 and 2. 

And, we have provided the [AlphabetSoupCharity Optimization solution](../Solution/AlphabetSoupCharity_Optimization_solution.ipynb) as an example of just one solution and the answers to the questions from the **Results** section for the written report as a reference when checking learners' coding submission for Deliverables 3 and 4. 

## Submission

Make sure they upload the following to their Neural_Network_Charity_Analysis GitHub repository:

1. Their `AlphabetSoupCharity.ipynb` file for Deliverables 1 and 2.
2. Their `AlphabetSoupCharity.h5` file for Deliverables 1 and 2.
3. Their `AlphabetSoupCharity_Optimzation.ipynb` file for Deliverable 3.
4. Their `AlphabetSoupCharity_Optimzation.h5` file for Deliverable 3.
5. An updated README.md that has your written analysis.

## Grading Rubric

The [Deep Learning Grading Rubric](../Resources/Deep_Learning_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
