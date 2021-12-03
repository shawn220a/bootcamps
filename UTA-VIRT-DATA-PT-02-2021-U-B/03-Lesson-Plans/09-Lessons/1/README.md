# Module 9 Class 1: Querying Databases with SQLAlchemy

## Overview

This week, we will be using the Python library SQLAlchemy to connect to a SQL database, retrieve data into Python objects, create a Flask API web app, and connect to the app to render data on a webpage.

In today's class, you will use SQLAlchemy to connect to a database, inspect the table to get the table schema, write queries using SQL commands and Python, convert a SQLite table into a Pandas DataFrame, and plot results of a SQL query with Matplotlib.  

## Learning Objectives

By the end of class, you will be able to:

* Connect to a SQLite database using SQLAlchemy
* Perform basic SQL queries using `engine.execute()`
* Reflect existing databases
* Use the SQLAlchemy Inspector to view table names and metadata in the SQLite file
* Plot the query results from the SQLAlchemy object relational mapper (ORM)

- - -

## Instructor Notes

* The activities in this class will complement Lessons **9.0.1: Exploring Databases with SQL** through **9.3.4: Plot the Highest Number of Observations**.  You will benefit from these activities if you‘ve progressed through these lessons, which cover the following concepts, techniques, and tasks:  

* Connect to a SQLite database using the `create.engine()` function
* Create classes using the `automap_base()` function
* Retrieve the table schema using the `prepare()` function
* Access database classes or tables with `Base.classes`
* Retrieve the table information using `Base.classes.keys()`
* Create a session to a database using `Session(engine)`
* Write SQL queries to use aggregate functions, filter, and retrieve data from a table
* Save a SQLAlchemy query to a Pandas DataFrame

## Student Resources

[activity resources](https://2u-data-curriculum-team.s3.amazonaws.com/data-viz-online-lesson-plans/09-Lessons/9-1-Student_Resources.zip)

- - -

## Before Class

### 0. Office Hours

| Activity Time: 0:30       |  Elapsed Time:     -0:30  |
|---------------------------|---------------------------|

<strong> 📣 0.1 Instructor Do: Office Hours</strong>

- - -

## During Class

### 1. Getting Started

| Activity Time:       0:25 |  Elapsed Time:      0:25  |
|---------------------------|---------------------------|

<strong>📣 1.1 Instructor Do: Foundation Setting (0:10)</strong>

<strong>🎉  1.2 Everyone Do: Check-In (0:05)</strong>

<strong>📣 1.3 Instructor Do: Introduction to SQLAlchemy (0:10)</strong>

- - -

### 2. Reading SQLite and Converting SQL to Pandas

| Activity Time:       0:10 |  Elapsed Time:      0:35  |
|---------------------------|---------------------------|

<strong>🎉 2.1 Everyone Do: Building a SQLAlchemy Connection (0:10)</strong>

- - -

### 3. Reflecting on SQL

| Activity Time:       0:30 |  Elapsed Time:      1:05  |
|---------------------------|---------------------------|

<strong>📣 3.1 Instructor Do: Reflections (0:10)</strong>

<strong>✏️ 3.2 Students Do: Reflecting on SQL (0:15)</strong>

<strong>⭐ 3.3 Review: Reflection on SQL (0:05)</strong>

- - -

### 4. Salary Exploration

| Activity Time:       0:25 |  Elapsed Time:      1:30  |
|---------------------------|---------------------------|

<strong>📣 4.1 Instructor Do: SQLAlchemy Exploration (0:05)</strong>

<strong>✏️ 4.2 Students Do: Salary Exploration (0:15)</strong>

<strong>⭐ 4.3 Review: Salary Exploration (0:05)</strong>

- - -

### 5. Working with Dates

| Activity Time:       0:25 |  Elapsed Time:      1:55  |
|---------------------------|---------------------------|

<strong>📣 5.1 Instructor Do: Dates (0:05)</strong>

<strong>🎉 5.2 Everyone Do: Dates (0:20)</strong>

- - -


### 6. Ending Class

| Activity Time:       0:05 |  Elapsed Time:      2:00  |
|---------------------------|---------------------------|

<strong>📣  6.1 Instructor Do: Review </strong>

* These are the skills that were covered today:
  * Connecting to a database using `create_engine` and `session`, and reflecting the data were covered in **Lesson 9.1.5**.
  * The `query()` method on the `session` object was covered in **Lesson 9.1.5**.
  * The difference in time using `timedelta` was covered in **Lesson 9.2.1**.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
