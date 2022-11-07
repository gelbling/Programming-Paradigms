# Gabriel Amodeo Elbling
# Prog. Paradigms
# HW9, Q1

# import requests library
from requests.auth import HTTPBasicAuth
import requests

# import csv library
import csv


# set base URL
URL = "http://localhost:8000/"


# find total bugs per package
def total_bugs_per_package(packageHash):

    # set initial url "http://localhost:8000/bugs"
    curr_url = URL + 'bugs'
    # control variable for making requests
    makeRequest = True

    # makijng request to each page
    while makeRequest:

        # make get request
        response = requests.get(curr_url)
        # parse response as json
        json_resp = response.json()

        # parse the json response, counting bugs for each package
        get_bug_per_package(json_resp,packageHash)

        # if there is no next page, stop making requests
        if json_resp['next'] == None:
            makeRequest = False
            break

        # update the url to the next page
        curr_url = json_resp['next']


# parse response
def get_bug_per_package(resp, packageHash):

    # update package count on hashtable according to bug's package
    for i in resp['results']:
        packageHash[i['package']] = packageHash.get(i['package'],0) + 1


# find total comments per bug
def total_comments_per_bug(bugHash):

    # set initial url "http://localhost:8000/bugs"
    curr_url = URL + 'comments'
    # control variable for making requests
    makeRequest = True

    # makijng request to each page
    while makeRequest:

        # make get request
        response = requests.get(curr_url)
        # parse response as json
        json_resp = response.json()

        # parse the json response, counting comments for each bug
        get_comments_per_bug(json_resp,bugHash)

        # if there is no next page, stop making requests
        if json_resp['next'] == None:
            makeRequest = False
            break

        # update the url to the next page
        curr_url = json_resp['next']


# parse response
def get_comments_per_bug(resp, bugHash):

    # update bug's comment count on hashtable according to the seen bug
    for i in resp['results']:
        
        # parse bug_id from bug url
        bug = i['bug'].split('/')
        bug_id = bug[4]

        # update bug_id's count in hashtable
        bugHash[bug_id] = bugHash.get(bug_id,0) + 1


def main():

    # create and open csv file
    with open("total_bugs_per_package.csv", "w", newline='', encoding="utf8") as csvfile:

        # create writer object
        csv_writer = csv.writer(csvfile, delimiter=',',quotechar='"')
        # write header 
        csv_writer.writerow(["package","total"])

        # create hashtable for package bug count
        # key=package value=bug count
        packageHash = {}
        # populate hashtable
        total_bugs_per_package(packageHash)

        # write values from hashtable to csv
        for key,value in packageHash.items():
            csv_writer.writerow([key,value])
    

    #create and open csv file
    with open("total_comments_per_bug.csv", "w", newline='', encoding="utf8") as csvfile:

        # create writer object
        csv_writer = csv.writer(csvfile, delimiter=',',quotechar='"')
        # write header 
        csv_writer.writerow(["bug_id","total"])

        # create hashtable for bug and comment count
        # key=bug_id value=total comments
        bugHash = {}
        # populate hashtable
        total_comments_per_bug(bugHash)

        # write values from hashtable to csv
        for key,value in bugHash.items():
            csv_writer.writerow([key,value])

    

if __name__ == '__main__':
	main()