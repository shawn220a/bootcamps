### Instructions:

* Run the the starter code provided in Google Colab to create the circles dummy dataset.

* Convert the circles dataset to a dataframe and plot the circles dataset using Pandas.

* Create a method that creates and compiles a new Sequential deep learning model with hyperparameter options. Be sure to include the following features:

  * Allow kerastuner to select between **relu** and **tanh** activation functions for each hidden layer.

  * Allow kerastuner to decide from 1 to 30 neurons in the first dense layer.

    * **Note:** To limit the tuner runtime, increase your *step* argument to at least 5.

  * Allow kerastuner to decide from 1 to 5 hidden layers and 1 to 30 neurons in each dense layer.

* Import the `kerastuner` library and create a **Hyperband** tuner instance. Your tuner instance should use the following parameters:

  * The *objective* is "val_accuracy"

  * *max_epochs* equal to 20

  * *hyperband_iterations* equal to two.

  * If you want to rerun the code again, you'll need to add `overwrite=True` as a paremeter. 

* Run the `kerastuner` search for best hyperparameters over 20 epochs.

* Retrieve the top 3 model hyperparameters from the tuner search and print the values.

* Retrieve the top 3 models from the tuner search and compare their predictive accuracy against the test dataset.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.