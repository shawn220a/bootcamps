# -*- coding: UTF-8 -*-
"""PyPoll Homework Solution."""

# Incorporated the csv module
import csv
import os

# Files to load and output (Remember to change these)
file_to_load = os.path.join("Resources", "election_data.csv")
file_to_output = os.path.join("analysis", "election_analysis.txt")
voter_turnout_file = os.path.join("Resources","registered_voters.csv")

# Total Vote Counter
total_votes = 0

# Candidate Options and Vote Counters
candidate_options = []
candidate_votes = {}
county_names = []
county_votes = {}

# Winning Candidate and Winning Count Tracker
winning_candidate = ""
winning_count = 0
largest_county_turnout = ""
largest_county_vote = 0

# Registered Voters
arapahoe_num_registered = 0
denver_num_registered = 0
jefferson_num_registered = 0

# County List
counties = ["Arapahoe","Denver","Jefferson"]

# Read the csv and convert it into a list of dictionaries
with open(file_to_load) as election_data:
    reader = csv.reader(election_data)

    # Read the header
    header = next(reader)

    # For each row...
    for row in reader:

        # Run the loader animation
        print(". ", end=""),

        # Add to the total vote count
        total_votes = total_votes + 1

        # Extract the candidate name from each row
        candidate_name = row[2]

        # Extract the county name from eac row
        county_name = row[1]

        # If the candidate does not match any existing candidate...
        # (In a way, our loop is "discovering" candidates as it goes)
        if candidate_name not in candidate_options:

            # Add it to the list of candidates in the running
            candidate_options.append(candidate_name)

            # And begin tracking that candidate's voter count
            candidate_votes[candidate_name] = 0

        # Then add a vote to that candidate's count
        candidate_votes[candidate_name] = candidate_votes[candidate_name] + 1

        # If the county does not match any existing county...
        if county_name not in county_names:

            # Add it to the list of candidates in the running
            county_names.append(county_name)

            # And begin tracking that candidate's voter count
            county_votes[county_name] = 0

        # Then add a vote to that candidate's count
        county_votes[county_name] = county_votes[county_name] + 1

with open(voter_turnout_file,"r") as pop_count:
    reader = csv.reader(pop_count)

    arapahoe_registered = next(reader)
    arapahoe_num_registered = arapahoe_registered[1]

    denver_registered = next(reader)
    denver_num_registered = denver_registered[1]

    jefferson_registered = next(reader)
    jefferson_num_registered = jefferson_registered[1]
    



# Print the results and export the data to our text file
with open(file_to_output, "w") as txt_file:

    # Print the final vote count (to terminal)
    election_results = (
        f"\n\nElection Results\n"
        f"-------------------------\n"
        f"Total Votes: {total_votes}\n"
        f"-------------------------\n")
    print(election_results, end="")

    # Save the final vote count to the text file
    txt_file.write(election_results)

    for k, v in county_votes.items():

        county_vote = county_votes[k]
        county_percent = float(county_vote) / float(total_votes) * 100

        county_results = f"{k}: {county_percent:.2f}% ({county_vote})\n"
        print(county_results, end="")
        txt_file.write(county_results)

        # Determine winning vote count and candidate
        if (county_vote > largest_county_vote):
            largest_county_vote = county_vote
            largest_county_turnout = k

    # Print the county with the largest turnout  (to terminal)
    largest_county_turnout = (
        f"-------------------------\n"
        f"Largest County Turnout: {largest_county_turnout}\n"
        f"-------------------------\n")
    print(largest_county_turnout)
    txt_file.write(largest_county_turnout)

    print("Voter Turnout By County")
    txt_file.write("Voter Turnout By County\n")
    if county_votes.get("Arapahoe"):
        percentage = float(county_votes.get("Arapahoe")) / float(arapahoe_num_registered) * 100
        arapahoe_turnout = f"Arapahoe: {percentage:.2f}%"
        print(arapahoe_turnout)
        arapahoe_turnout = arapahoe_turnout + "\n"
        txt_file.write(arapahoe_turnout)

    if county_votes.get("Denver"):
        percentage = float(county_votes.get("Denver")) / float(denver_num_registered) * 100
        denver_turnout = f"Denver: {percentage:.2f}%"
        print(denver_turnout)
        denver_turnout = denver_turnout + "\n"
        txt_file.write(denver_turnout)

    if county_votes.get("Jefferson"):
        percentage = float(county_votes.get("Jefferson")) / float(jefferson_num_registered) * 100
        jefferson_turnout = f"Jefferson: {percentage:.2f}%\n"
        print(jefferson_turnout)
        txt_file.write(jefferson_turnout)

    print(f"-------------------------\n")
    txt_file.write(f"-------------------------\n")
    # Determine the winner by looping through the counts
    for candidate in candidate_votes:

        # Retrieve vote count and percentage
        votes = candidate_votes.get(candidate)
        vote_percentage = float(votes) / float(total_votes) * 100

        # Determine winning vote count and candidate
        if (votes > winning_count):
            winning_count = votes
            winning_candidate = candidate

        # Print each candidate's voter count and percentage (to terminal)
        voter_output = f"{candidate}: {vote_percentage:.3f}% ({votes})\n"
        print(voter_output, end="")

        # Save each candidate's voter count and percentage to text file
        txt_file.write(voter_output)    

    # Print the winning candidate (to terminal)
    winning_candidate_summary = (
        f"-------------------------\n"
        f"Winner: {winning_candidate}\n"
        f"-------------------------\n")
    print(winning_candidate_summary)

    # Save the winning candidate's name to the text file
    txt_file.write(winning_candidate_summary)


