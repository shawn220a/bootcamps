# Challenge Solution Grading Instructions

The objective of this challenge is for learners to make additional `d3.json()` API calls and graph tectonic plate data on top of their earthquake data, plot weekly major earthquake data (those that have a magnitude of 4.5 or greater), and add a third map style to their webpage.

## Deliverable 1: Add Tectonic Plate Data
For the first deliverable, we are asking the learners to make a `d3.json()` call to plot tectonic plate GeoJSON LineString data.  

This task should not be challenging.  However, we have provided the [starter code](../Resources/tectonic_plate_starter_logic.js) to assist them. The starter code contains all the code used to plot the earthquake data on two maps that was covered in this module. They should download the starter code file and rename it `challenge_logic.js`. 

For the tectonic plate data they'll need to:

  * Add a second layer group variable for the tectonic plate data.

  * Add a reference to the tectonic plate data to the overlay object, so the earthquake data and tectonic plate data are selected. 

  * Style the lines with a color and weight that will make it stand out on all maps.

Their map should look similar to the following image:

![ All earthquake data and tectonic plate data on the map](../images/tectonic_plates.png)

## Deliverable 2: Add Major Earthquake Data 
For this deliverable, we are asking the learners to add major earthquake data with a magnitude of 4.5 or greater to the map. This data will be populated on the map in additon to all the weekly earthquake data and the tectonic plate data. 

This task should not be that challenging, however, they'll have to copy and refactor some of the code used to plot the weekly earthquake data. To help them we have provided [starter code](../Resources/major_eq_starter_logic.js).  The starter code contains all the code used to plot the earthquake data on two maps in this module. 

They should follow the instructions in Canvas that refer to the steps in the starter code and make the changes to their `challenge_logic.js` file for this part of the challenge.

For the major earthquake data they'll need to:

  * Add a third layer group variable for the major earthquake data.

  * Add a reference to the major earthquake data to the overlay object, so all the data are selected. 

  * Change the `getColor()` function to use only *three* colors for the following magnitudes; a magnitude less than 4, a magnitude greater than 4, and a magnitude greater than 5.

  * Use the same parameters in the `getRadius()` function.

  * When plotting the major earthquake data they'll need to create a circleMarker that is styled, and has a popup marker that displays the magnitude and location of the earthquake.

Their map should look similar to the following image:

![All earthquakes, major earthquakes, and tectonic plate data on the map](../images/earthquakes_tectonic_plates.png)

## Deliverable 3: Add an Additional Map
For this deliverable, we are asking the learners to add a third map style to the earthquake map.

This task should not be challenging whereas they have added map styles to the map tile layer. 

Here, the learners will have to choose which map to use for the their map, and make sure that all the earthquake data and tectonic plate data are displayed on the all maps of the webpage.

Their map should look similar to the following image:

![All earthquakes, major earthquakes, and tectonic plate data on the map with three map style options](../images/all_data_three_maps.png)

## Solution File

The final [solution](static/js/challenge_logic.js) adds the tectonic plate and major earthquake data, and adds a third map to the module solution. 

## Submission

Make sure they upload the following to their GitHub pages repository:

1. The Earthquake_Challenge folder
    * `index.html`
    * static
        * css
            * `style.css`
        * js
            * `challenge_logic.js`

2. A README.md that describes the purpose of the repository.  Although there is no graded written analysis for this challenge, it is encouraged and good practice to add a brief description of your project.

## Grading Rubric

The [Mapping Earthquakes Grading Rubric](../Resources/Earthquake_Mapping_Grading_Rubric.pdf) is provided for you to use when grading the learners' submissions.
