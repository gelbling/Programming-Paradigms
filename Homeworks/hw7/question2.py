# Gabriel Amodeo Elbling
# Prog. Paradigms
# HW7, Q2

# create move_robot iterator function
def move_robot(n):

    # initialize variables
    m           = 1    # step size
    x           = 0    # robot x-position
    y           = 0    # robot y-position
    steps       = n    # number of steps
    orientation = 0    # orientation angle
    counter     = 0    # loop counter

    # loop through number of steps+1 to include the initial zero step
    while (counter < steps+1):

        # in the initial step, yield the starting (0,0) position
        if counter == 0:
            counter += 1
            yield (0,0)

        # for orientation angle 0, move north by m
        if orientation == 0:
            y += m
        # for orientation angle 90, move east by m
        elif orientation == 90:
            x += m
        # for orientation angle 180, move south by m
        elif orientation == 180:
            y -= m
        # for orientation angle 270, move west by m
        elif orientation == 270:
            x -= m

        # if the orientation is 270, reset it to 0
        if orientation == 270:
            orientation = 0
        # or else, increment the angle by 90
        else:
            orientation += 90

        # incremenet size of each step
        m += 1

        # increment the counter
        counter += 1

        # yield tuple of x and y coordinate
        yield (x, y)

