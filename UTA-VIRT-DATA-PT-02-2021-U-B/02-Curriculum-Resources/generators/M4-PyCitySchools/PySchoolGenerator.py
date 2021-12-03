# Environment Setup
# ----------------------------------------------------------------
# Dependencies
import csv
import pandas as pd
import numpy as np
from faker import Faker
fake = Faker()

# Output File Name
file_output_schools = "generated_data/schools_complete.csv"
file_output_students = "generated_data/students_complete.csv"

# Generate a random number of Schools
type_options = ("District", "Charter")
num_schools = 11

# School Size Ranges
small_school_size = (250, 2500)
large_school_size = (2501, 5000)

# Budget Amount Ranges
low_capita_budget = (575, 650)
high_capita_budget = (625, 675)

# Student Math Scores Data
low_math_scores = [64, 100]
high_math_scores = [68, 100]

# Student Reading Scores Data
low_reading_scores = [55, 100]
high_reading_scores = [89, 100]

# Grade Ratios
grade_options = ["9th", "10th", "11th", "12th"]
grade_ratios = [0.27, 0.29, 0.22, 0.22]


# Create Schools
# ----------------------------------------------------------------


# Function for creating schools
def create_school():

    # Create an object for holding schools
    school = {}

    # Specify the School Name
    school_name = fake.last_name() + " High School"
    school["school_name"] = school_name

    # Specify the School Type
    school_type = np.random.choice(type_options)
    school["type"] = school_type

    # Specify the School Budget
    if school["type"] == "Charter":
        school_size = np.random.randint(small_school_size[0],
                                        small_school_size[1])
        school_budget = np.random.randint(low_capita_budget[0],
                                          low_capita_budget[1]) * school_size

    else:
        school_size = np.random.randint(large_school_size[0],
                                        large_school_size[1])
        school_budget = np.random.randint(high_capita_budget[0],
                                          high_capita_budget[1]) * school_size

    # Set the school size and budget
    school["size"] = school_size
    school["budget"] = school_budget

    return(school)


# Create a set number of schools
schools_list = []

# Add each generated school to the schools_list
for x in range(num_schools):
    new_school = create_school()
    schools_list.append(new_school)
    print(". ", end="")

# Convert to DataFrame for easy export
schools_list_pd = pd.DataFrame(schools_list)

# Reorder columns
schools_list_pd = schools_list_pd[["school_name", "type", "size", "budget"]]

# Export to CSV
schools_list_pd.to_csv(file_output_schools, index_label="School ID")


# Create Students
# ----------------------------------------------------------------

# Function for creating students
def create_student(school):

    # Create an object for holding students
    student = {}

    # Specify the Student Name
    student_data = fake.simple_profile()
    student_name = student_data["name"]

    # Minor cleanup of the name

    student["student_name"] = student_name

    # Assign the student a school
    student["school_name"] = school["school_name"]

    # Assign the student a grade
    student["grade"] = np.random.choice(grade_options, p=grade_ratios)

    # Assign the student a gender
    student["gender"] = student_data["sex"]

    # Assign the student a math score (include charter bonus)
    if school["type"] == "Charter":
        student["math_score"] = np.random.randint(high_math_scores[0],
                                                  high_math_scores[1])

    else:
        student["math_score"] = np.random.randint(low_math_scores[0],
                                                  high_math_scores[1])

    # Assign the student a reading score
    if school["type"] == "Charter":
        student["reading_score"] = np.random.randint(high_reading_scores[0],
                                                     high_reading_scores[1])

    else:
        student["reading_score"] = np.random.randint(low_reading_scores[0],
                                                     high_reading_scores[1])
    # Return the constructed student
    return(student)


# Create an array of students
students_list = []

# For each school, fill the student population
for i, school in enumerate(schools_list):

    for student in range(school["size"]):
        new_student = create_student(school)
        students_list.append(new_student)
        print("Printing School #%s. Student #%s\n" % (i + 1, student), end="")

# Convert to DataFrame for easy export
students_list_pd = pd.DataFrame(students_list)

# Reorder the columns upon export
students_list_pd = students_list_pd[["student_name", "gender", "grade",
                                     "school_name", "reading_score",
                                     "math_score"]]

# Export to CSV
students_list_pd.to_csv(file_output_students, index_label="Student ID")
