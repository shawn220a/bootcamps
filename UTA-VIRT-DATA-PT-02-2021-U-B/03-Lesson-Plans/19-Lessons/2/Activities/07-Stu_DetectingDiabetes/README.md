### Instructions:

* Upload the [DetectingDiabetes_starter.ipynb](Unsolved/DetectingDiabetes_starter.ipynb) notebook into Google Colab, and run the code to import the dependencies and load the diabetes dataset.

* Separate the diabetes **Outcome** target from the other features in the dataset

* Split the features and target into training and test datasets

* Preprocess the input data accordingly:

  * If preprocessing categorical data use Scikit-learn's **OneHotEncoder** module.

  * If preprocessing numerical data use Scikit-learn's **StandardScaler** module.

* Define a deep learning model with the following features:

  * A first dense layer with 8 inputs and the "relu" activation function

  * A second dense layer with at least 8 neurons and the "relu" activation function

  * An output layer with one neuron and the "sigmoid" activation function

* Compile and train the model across no more than 100 epochs

* Evaluate the performance of the deep learning model by calculating the test loss and predictive accuracy.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.