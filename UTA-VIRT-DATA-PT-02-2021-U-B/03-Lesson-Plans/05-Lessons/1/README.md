# Module 5 Class 1: Getting Started with Matplotlib and Visualizations

## Overview

This week, you will be introduced to Matplotlib, a Python plotting library used to produce publication-quality data visualizations. Matplotlib has a set of features for creating and annotating charts that visualize data in a Data Series or DataFrame. You will use Matplotlib to create line, bar, scatter, bubble, pie, and box-and-whisker charts, and also to make them visually compelling and informative by adding titles, axes labels, legends, and custom colors.  You'll also be introduced to SciPy, a statistical Python package, and NumPy, a fundamental package for scientific computing, to perform summary statistics.

The main focus of today's class is to get you comfortable with creating and annotating line, bar, pie, and scatter charts.

## Learning Objectives

By the end of class, you will be able to:

* Create line, bar, pie, and scatter charts
* Add and modify chart features


- - -

## Instructor Notes

* The activities in this class will complement Lessons **5.0.1: Visualizing Ride-Sharing Data** through **5.1.9: Chart Extras**.  You will benefit from these activities if you've progressed through these lessons, which cover the following concepts, techniques, and tasks:  

* Create line, bar, pie, and scatter charts
* Add a title and x- and y-axes labels
* Add error bars and minor ticks

* A note on potential errors caused by the Matplotlib library:

  * The `%matplotlib notebook` magic command for the displaying the notebook on the backend is used in a number of activities. It not only makes a plot interactive, but it also allows it to be updated after the initial plot. If you encounter weirdness during the activities, check to see that you used this line before importing the plotting libraries.

  * On Windows the `%matplotlib notebook` command may have to be called twice to ensure that plots can be updated after the initial plot is made.

    ```python
    %matplotlib notebook
    %matplotlib notebook
    ```

  * Ideally, you should update your Matplotlib to version 2.2 or later. A bug in earlier versions resizes plots after an image is exported with the `savefig()` method.

*  We encourage you to develop the habit of exploring the Matplotlib documentation. A large part of the process of developing plots with the library is reading [examples](http://Matplotlib.org/examples/index.html), so it is important for them to become accustomed to this workflow.

## Student Resources

[activity resources](https://2u-data-curriculum-team.s3.amazonaws.com/data-viz-online-lesson-plans/05-Lessons/5-1-Student_Resources.zip)

- - -

## Before Class

### 0. Office Hours

| Activity Time: 0:30       |  Elapsed Time:     -0:30  |
|---------------------------|---------------------------|

<strong> 📣 0.1 Instructor Do: Office Hours</strong>

- - -

## During Class

### 1. Getting Started

| Activity Time:       0:15 |  Elapsed Time:      0:15  |
|---------------------------|---------------------------|

<strong>📣 1.1 Instructor Do: Foundation Setting (0:10)</strong>

<strong>🎉  1.2 Everyone Do: Check-In (0:05)</strong>

- - -

### 2. Legendary Temperature

| Activity Time:       0:25 |  Elapsed Time:      0:40  |
|---------------------------|---------------------------|

<strong>📣 2.1 Instructor Do: Introduction to Matplotlib (0:10)</strong>

<strong>🎉 2.2 Everyone Do: Legendary Temperature (0:15)</strong>

- - -

### 3. Bars Bar Chart

| Activity Time:       0:30 |  Elapsed Time:      1:10  |
|---------------------------|---------------------------|

<strong>📣 3.1 Instructor Do: Different Plots (0:05)</strong>

<strong>📣 3.2 Instructor Do: Bar Charts (0:05)</strong>

<strong>✏️ 3.3 Student Do: Bars Bar Chart (0:15)</strong>

<strong>⭐ 3.4 Review: Bars Bar Chart (0:05)</strong>

- - -

### 4. Pies Pie Chart

| Activity Time:       0:25 |  Elapsed Time:      1:35  |
|---------------------------|---------------------------|

<strong>📣 4.1 Instructor Do: Pie Charts (0:05)</strong>

<strong>✏️ 4.2 Student Do: Pies Pie Chart (0:15)</strong>

<strong>⭐ 4.3 Review: Pies Pie Chart (0:05)</strong>

- - -

### 5. Scatter Py

| Activity Time:       0:20 |  Elapsed Time:      1:55  |
|---------------------------|---------------------------|

<strong>📣 5.1 Instructor Do: Scatter Plots (0:05)</strong>

<strong>🎉 5.2 Everyone Do: Scatter Py (0:15)</strong>

- - -

### 6. Ending Class

| Activity Time:       0:05 |  Elapsed Time:      2:00  |
|---------------------------|---------------------------|

<strong>📣  6.1 Instructor Do: Review </strong>
* Creating line charts was covered in **Lessons 5.1.3**.
* Annotating charts was covered in **Lesson 5.1.4**.
* Creating bar charts was covered in **Lesson 5.1.5**.
* Creating scatter charts was covered in **Lesson 5.1.7**.
* Creating pie charts was covered in **Lesson 5.1.8**.
* Adding color, formatting text, and adding minor ticks was covered in **Lesson 5.1.9**.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
