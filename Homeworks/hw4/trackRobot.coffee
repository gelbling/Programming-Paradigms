# Gabriel Amodeo Elbling
# Prog. Paradigms
# Activity HW4, Q2

trackRobot = (north, east, south, west) -> 
	
    # create robot x and y coordinates
    xRobot = 0
    yRobot = 0

    # if the north argument is populated, add the north value to the robot's y coordinate variable
    if north
        yRobot += north

    # if the east argument is populated, add the east value to the robot's x coordinate variable
    if east
        xRobot += east

    # if the south argument is populated, subtract the south value from the robot's y coordinate variable
    if south
        yRobot -= south
    
    # if the west argument is populated, subtract the west valaue from the robot's x coordinate variable
    if west
        xRobot -= west

    # return the updated coordinates as as list [x,y]
    return [xRobot, yRobot]



module.exports = { trackRobot }