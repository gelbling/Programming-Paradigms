# Gabriel Amodeo Elbling
# Prog. Paradigms
# Activity 8, Q1

# import math library to use sqrt()
import math

# create point class
class Point:

    # constructor to assign passed variables to x and y
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # print function that prints the objects's points
    def print(self):
        print('(' + str(self.x) + ',' + str(self.y) + ')')

# function to compute eucledian distance
def distance(p1,p2):
    # return the eucledian distance between both points
    return math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2)

