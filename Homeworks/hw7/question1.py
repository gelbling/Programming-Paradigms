# Gabriel Amodeo Elbling
# Prog. Paradigms
# HW 7, Q1

# create move_robot iterator
class move_robot:

    # initialize first iteration state, and initial variable values
    def __init__(self, n) -> None:
        self.m           = 1    # step size
        self.x           = 0    # robot x-position
        self.y           = 0    # robot y-position
        self.steps       = n    # number of steps
        self.orientation = 0    # orientation angle
        self.counter     = 0    # loop counter
        
    # apply built in __iter__ funtion to the iterable, creating an iterator
    def __iter__(self):
        return self

    # returns the next element of the sequence
    # or stops iteration because no more elements remain
    def __next__(self):

        # loop through number of steps+1 to include the initial zero step
        while (self.counter < self.steps+1):

            # in the initial step, return the starting (0,0) position
            if self.counter == 0:
                self.counter += 1
                return (0,0)

            # for orientation angle 0, move north by m
            if self.orientation == 0:
                self.y += self.m
            # for orientation angle 90, move east by m
            elif self.orientation == 90:
                self.x += self.m
            # for orientation angle 180, move south by m
            elif self.orientation == 180:
                self.y -= self.m
            # for orientation angle 270, move west by m
            elif self.orientation == 270:
                self.x -= self.m

            # if the orientation is 270, reset it to 0
            if self.orientation == 270:
                self.orientation = 0
            # or else, increment the angle by 90
            else:
                self.orientation += 90

            # incremenet size of each step
            self.m += 1

            # increment the counter
            self.counter += 1

            # return tuple of x and y coordinate
            return (self.x, self.y)

        # if there are no more steps left, stop the iteration
        else:
            raise StopIteration()
