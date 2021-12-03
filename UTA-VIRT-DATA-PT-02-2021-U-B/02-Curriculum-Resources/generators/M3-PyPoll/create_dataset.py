import csv
import os
import random
from progress.bar import Bar
result = random.randint(1000000,1500000)
district = "district 1"
candidate_list = ["Charles Casper Stockham","Diana DeGette","Raymon Anthony Doane"]
county = ["Arapahoe","Denver","Jefferson"]
ballot_ids = []

###
# Known issues: - Duplicate ballot id's
#               - All candidates are not in random order
###

bar = Bar('Processing',max=370000)
with open(r'election_results.csv','a') as datafile:
    writer = csv.writer(datafile)
    writer.writerow(["Ballot ID", "County", "Candidate"])

    ###
    # Jefferson County
    ###
    
    # for candidate Charles in Jefferson county - 19722
    jef_charles = 0 
    while jef_charles <= 19722:
        jefferson_ballot_id = random.randint(1000000,2000000)
        if jefferson_ballot_id not in ballot_ids:
            ballot_ids.append(jefferson_ballot_id)
            jefferson_output = [jefferson_ballot_id,county[2],candidate_list[0]]
            writer.writerow(jefferson_output)
            jef_charles = jef_charles + 1
            bar.next()



    # for candidate Diana in Jefferson county - 17962
    jef_diana = 0
    while jef_diana <= 17962:
        jefferson_ballot_id = random.randint(1000000,2000000)
        if jefferson_ballot_id not in ballot_ids:
            ballot_ids.append(jefferson_ballot_id)
            jefferson_output = [jefferson_ballot_id,county[2],candidate_list[1]]
            writer.writerow(jefferson_output)
            jef_diana = jef_diana + 1
            bar.next()


    # for candidate Raymon in Jefferson county - 1168
    jef_raymon = 0
    while jef_raymon <= 1168:
        jefferson_ballot_id = random.randint(1000000,2000000)
        if jefferson_ballot_id not in ballot_ids:
            ballot_ids.append(jefferson_ballot_id)
            jefferson_output = [jefferson_ballot_id,county[2],candidate_list[2]]
            writer.writerow(jefferson_output)
            jef_raymon = jef_raymon + 1
            bar.next()

    ### 
    # Denver County
    ###

    # for candidate Charles in Denver County - 57187
    den_charles = 0
    while den_charles <= 57187:
        denver_ballot_id = random.randint(2000000,3000000)
        if denver_ballot_id not in ballot_ids:
            ballot_ids.append(denver_ballot_id)
            denver_output = [denver_ballot_id,county[1],candidate_list[0]]
            writer.writerow(denver_output)
            den_charles = den_charles + 1
            bar.next()

    # for candidate Diana in Denver County - 239281
    den_diana = 0
    while den_diana <= 239281:
        denver_ballot_id = random.randint(5000000,8000000)
        if denver_ballot_id not in ballot_ids:
            ballot_ids.append(denver_ballot_id)
            denver_output = [denver_ballot_id,county[1],candidate_list[1]]
            writer.writerow(denver_output)
            den_diana = den_diana + 1
            bar.next()


    # for candidate Raymon in Denver County - 9584
    den_raymon = 0
    while den_raymon <= 9584:
        denver_ballot_id = random.randint(3000000,4000000)
        if denver_ballot_id not in ballot_ids:
            ballot_ids.append(denver_ballot_id)
            denver_output = [denver_ballot_id,county[1],candidate_list[2]]
            writer.writerow(denver_output)
            den_raymon = den_raymon + 1
            bar.next()

    ###
    # Arapahoe County
    ###


    # for candidate charles - 8301
    ara_charles = 0
    while ara_charles <= 8301:
        arapahoe_ballot_id = random.randint(4000000,5000000)
        if arapahoe_ballot_id not in ballot_ids:
            ballot_ids.append(arapahoe_ballot_id)
            arapahoe_output = [arapahoe_ballot_id,county[0],candidate_list[0]]
            writer.writerow(arapahoe_output)
            ara_charles = ara_charles + 1
            bar.next()

    # for candidate diana - 15646
    ara_diana = 0
    while ara_diana <= 15646:
        arapahoe_ballot_id = random.randint(4000000,5000000)
        if arapahoe_ballot_id not in ballot_ids:
            ballot_ids.append(arapahoe_ballot_id)
            arapahoe_output = [arapahoe_ballot_id,county[0],candidate_list[1]]
            writer.writerow(arapahoe_output)
            ara_diana = ara_diana + 1
            bar.next()

    # for candidate raymon - 851
    ara_raymon = 0
    while ara_raymon <= 851:
        arapahoe_ballot_id = random.randint(4000000,5000000)
        if arapahoe_ballot_id not in ballot_ids:
            ballot_ids.append(arapahoe_ballot_id)
            arapahoe_output = [arapahoe_ballot_id,county[0],candidate_list[2]]
            writer.writerow(arapahoe_output)
            ara_raymon = ara_raymon + 1
            bar.next()
bar.finish()
datafile.close()