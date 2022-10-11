# Gabriel Amodeo Elbling
# Prog. Paradigms
# HW 6, Q1

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

    # calculate point's diantance from origin
    def distOrigin(self, x, y):
        return math.sqrt((x-0)**2 + (y-0)**2)

    # special method to check if first point is less than second point, if so return True, else return False
    def __lt__(self, otherPoint):
        return self.distOrigin(self.x, self.y) < self.distOrigin(otherPoint.x, otherPoint.y)
    
    # special method to check if first point is less than or equal to second point, if so return True, else return False
    def __le__(self, otherPoint):
        return self.distOrigin(self.x, self.y) <= self.distOrigin(otherPoint.x, otherPoint.y)

    # special method to check if the first point is greater than or equal to second point, if so return True, else return False
    def __ge__(self, otherPoint):
        return self.distOrigin(self.x, self.y) >= self.distOrigin(otherPoint.x, otherPoint.y)

    # special method to check if the first point is greater than the second point, if so return True, else return False
    def __gt__(self, otherPoint):
        return self.distOrigin(self.x, self.y) > self.distOrigin(otherPoint.x, otherPoint.y)

    # special method to check if the first point if equal to the second point, if so return True, else return False
    def __eq__(self, otherPoint):
        return self.distOrigin(self.x, self.y) == self.distOrigin(otherPoint.x, otherPoint.y)


p1 = Point(2,3)  
p2 = Point(-3,1) 
p3 = Point(-2,-3)
print(p1 > p2)  # p1 is more distant to the origin than p2
print(p1 == p2) # p1 and p2 are not equally distant to the origin 
print(p1 < p2)  # p1 is not closer to the origin as compared to p2
print(p1 == p3) # p1 and p3 are equally distant to the origin