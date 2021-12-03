# Challenge Solution Grading Instructions

The objective of this challenge is for learners to implement machine learning models using resampling and ensemble to address class imbalance, and evaluate the performance of different machine learning models.

## Deliverable 1: Use Resampling Models to Predict Credit Risk 

For the first deliverable, we are asking the learners to evaluate three machine learning models using resampling to determine which is better at predicting credit risk, the oversampling `RandomOverSampler` and `SMOTE` algorithms, or the undersampling `ClusterCentroids` algorithm.

The learners should not find the tasks in this deliverable to be difficult since many of the steps needed to evaluate the three machine learning models are covered in Lessons 17.10.1 and 17.10.2.

However, we have provided [starter code](../Resources/credit_risk_resampling_starter_code.ipynb) to assist the students with instructions to complete this deliverable. 

After they create their training and target variables, they'll need to use the `LogisticRegression` classifier to make predictions and evaluate each model’s performance, and then calculate the accuracy score of the model, generate a confusion matrix, and print out the imbalanced classification report.

## Deliverable 2: Use the SMOTEENN algorithm to Predict Credit Risk

For the second deliverable, the learners will use a combinatorial approach of over- and undersampling with the `SMOTEENN` algorithm to determine if the results from the combinatorial approach are better at predicting credit risk compared to the resampling algorithms used in Deliverable 1. 

Like, Deliverable 1, the learners should not find the tasks in this deliverable to be difficult since the steps needed to completed this deliverable are covered in Lessons 17.10.3, and they'll need to compelete the same tasks as in Deliverable 1.

However, in the [starter code](../Resources/credit_risk_resampling_starter_code.ipynb), there are instructions to assist them with completing this deliverable. 

## Deliverable 3: Use Ensemble Classifiers to Predict Credit Risk

For the third deliverable, the learners will train and compare two different ensemble classifiers, `BalancedRandomForestClassifier` and `EasyEnsembleClassifier`, to predict credit risk and evaluate each model.

The learners should may find the tasks in this deliverable to be difficult since they have not been shown how to implement the `BalancedRandomForestClassifier` and `EasyEnsembleClassifier` algorithms. 

However, like Deliverable 1 and 2, we have provided instructions in the [starter code](../Resources/credit_risk_ensemble_starter_code.ipynb) to assist the students with this deliverable. In addition, there are links to documentation and examples for each algorithm.

Similar to Deliverable 1, they'll have to create their training and target variables, then for each model they'll need to use the `LogisticRegression` classifier to make predictions and evaluate each model’s performance, and then calculate the accuracy score of the model, generate a confusion matrix, and print out the imbalanced classification report. For the `BalancedRandomForestClassifier` algorithm they'll also need to print the feature importance, sorted in descending order (from most to least important feature), along with the feature score. 

## Deliverable 4: A Written Report on the Credit Prediction Analysis

The goal of the writing assignment is for learners to present their findings in a logical manner. As a reminder, learners should use appropriate grammar and structure when writing.

For this deliverable the learners will write a brief summary and analysis of the performance of all the machine learning models.  The report will be written in the repository README.md and contain three sections: an overview of the analysis, results, and summary. 

**Overview of the analysis:** Explain the purpose of this analysis.

**Results:** Using bulleted lists describe the results of the balanced accuracy score and the precision and recall scores of all six machine learning models. Use screenshots of your outputs to support your results.

**Summary:** Summarize the results of the machine learning models and include a recommendation on the model to use, if any. If you do not recommend any of the models, justify your reasoning.  

The README.md document should be in the home directory of their repository. All links should be working, and images should be formatted and displayed where appropriate.

## Solution Files

We have provided the [credit risk resampling solution](../Solution/credit_risk_resampling_solution.ipynb) as a reference when checking learners' coding submission for Deliverable 1 and 2. 

And, we have provided the [credit risk ensemble solution](../Solution/credit_risk_ensemble_solution.ipynb) as a reference when checking learners' coding submission for Deliverable 3. 

## Submission

Make sure they upload the following to their Credit_Risk_Analysis GitHub repository:

1. Their `credit_risk_resampling.ipynb` file.
2. Their `credit_risk_ensemble.ipynb` file.
3. An updated README.md that has your written analysis.

## Grading Rubric

The [Supervised Learning Grading Rubric](../Resources/Supervised_Learning_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
