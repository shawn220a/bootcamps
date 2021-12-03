# Challenge Solution Grading Instructions

The objective of this challenge is for learners to preprocess the data set using Pandas, reduce the dimensions to three principal components using PCA, predict clusters using the K-means algorithm, create an Elbow curve to find the best value for K,create a 3D-scatter plot using Plotly Express, create a 2D scatter plot using Holoviews, and a create table with tradable cryptocurrencies for thier results.

## Deliverable 1: Preprocessing the Data for PCA 

For the first deliverable, we are asking the learners to preprocess the cryptocurrency data set in order to perform PCA in Deliverable 2. 

The learners should not find the tasks to complete this deliverable difficult, because they should be familiar with cleaning data. After they clean the data they'll need to use the StandardScaler library to standardize features. 

We have provided [starter code](../Resources/crypto_clustering_starter_code.ipynb) to help the students get started. They'll need to add their code to the empty input cells to get the output shown.

## Deliverable 2: Reducing Data Dimensions Using PCA

For the second deliverable, the learners will apply the PCA algorithm to reduce the dimensions of the `X` DataFrame to three principal components and place these dimensions in a new DataFrame named `pcs_df`.

The learners should not find the tasks to complete this deliverable to be difficult since they have been introduced in Lesson 18.5.2.  

In the [starter code](../Resources/crypto_clustering_starter_code.ipynb) we have provided the empty input cells where they'll need to add their code to get the output shown. 

All they'll need to do is reduce the dimensions to three principal components and add those three dimensions to a new DataFrame. 

## Deliverable 3: Clustering Cryptocurrencies Using K-means

For the third deliverable, the learners will create an elbow curve using `hvPlot` to find the best value for K from the `pcs_df` DataFrame created in Deliverable 2. Then, they’ll run the K-means algorithm to predict the K clusters for the cryptocurrencies’ data.

The learners should not find the tasks to complete this deliverable to be difficult since they have been introduced in Lessons 18.3.2, 18.4.2, and 18.5.2. 

Like Deliverables 1 and 2, we have provided instructions in the [starter code](../Resources/crypto_clustering_starter_code.ipynb) to assist the students with this deliverable. In addition, there is a link to KMeans documentation.

* First, they'll need to create an elbow curve using `hvPlot` to find the best value for K.

* Next, they'll run the K-means algorithm on the the `pcs_df` DataFrame to make predictions of the K clusters for the cryptocurrencies’ data.

* Then, they'll need to create a new DataFrame, `clustered_df`, by concatenating the `crypto_df` and `pcs_df` DataFrames on the same columns. Add then `CoinName` and `Class` columns to the `clustered_df` DataFrame.

## Deliverable 4: Visualizing Cryptocurrencies Results

For the last deliverable, the learners will visualize their results by creating scatter plots with Plotly Express and `hvplot` and create a table with all the current tradable cryptocurrencies using the `hvplot.table()` function.

The learners may find the tasks to complete this deliverable to slightly difficult. Some steps have been covered in Lessons 18.3.2 and 18.4.2.  However, we have provide [starter code](../Resources/crypto_clustering_starter_code.ipynb), where the learners will need to add their code to the empty input cells to get the output shown.

We have also provided links to documentation to do the following tasks:
* Add additional parameters to a Plotly Express 3D scatter plot.
* Create a table using the `hvplot.table()` function.
* Use the `MinMaxScaler().fit_transform` method to scale the "TotalCoinSupply" and "TotalCoinsMined" columns.
* And, customize the `hvplot` scatter plot. 

## Solution Files

We have provided the [crypto clustering solution](crypto_clustering_solution.ipynb) as a reference when checking learners' coding submission.

## Submission

Make sure they upload the following to their Cryptocurrencies GitHub repository:

1. Their `crypto_clustering.ipynb` file.
2. A README.md that includes the purpose of the repository and short description of what was accomplished. Although there is no graded written analysis for this challenge, it is encouraged and good practice to add a brief description of your project.

## Grading Rubric

The [Unsupervised Learning Grading Rubric](../Resources/Unsupervised_Learning_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
