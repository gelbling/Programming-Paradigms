# Gabriel Amodeo Elbling
# Prog. Paradigms
# HW7, Q3

import tkinter as tk

# initialize bot class
class Bot:

    # half of bot image size
    botOffset = 16

    # image starting x and y positions
    xPos = (400 / 2) - 16
    yPos = (400 / 2) - 16

    # initialize direction varaible
    orientation = 0

    # iunitialize screen size variables
    screenWidth = 400
    screenHeight = 300

    # step size
    stepSize = 10

    def __init__(self, root):

        # display initial position
        print("Initial Postion: (" + str(self.xPos) + "," + str(self.yPos) + ")")

        # assign passed in root object
        self.root = root

        # create the canvas
        self.canvas = tk.Canvas(self.root, width=self.screenWidth, height=self.screenHeight)
        # put canvas onto screen
        self.canvas.pack()

        # read in bot image
        self.img = tk.PhotoImage(file="bot-32x32.png")
        # add image to canvas at starting x and y pos
        self.bot = self.canvas.create_image(self.xPos, self.yPos, image=self.img, anchor=tk.NW)

        # register the event, connecting mouse1 button to the step_robot function
        self.root.bind("<Button-1>", self.step_robot)

    # function that moves the bot
    def step_robot(self, event):

        # get the current position of the bot
        currentPos = self.canvas.coords(self.bot)

        # check if the bot is not out of bounds
        if ((currentPos[1]-self.botOffset) >= self.screenHeight) or ((currentPos[0]-self.botOffset) >= self.screenWidth) or ((currentPos[1]+self.botOffset) <= 0) or ((currentPos[0]+self.botOffset) <= 0):
            # reset the step size
            self.stepSize = 10
            # reset direction to north
            self.orientation = 0
            # reset the bot position to the middle of the screen
            self.canvas.move(self.bot, self.xPos+16-currentPos[0], self.yPos-currentPos[1])

        # if the bot is turned towards north
        if self.orientation == 0:

            # move bot to the north
            self.canvas.move(self.bot,0,-self.stepSize)

            # update the orientation to east (+90 degrees)
            self.orientation += 90
            # increment stepSize
            self.stepSize += 10

            # update current positon
            currentPos = self.canvas.coords(self.bot)
            # print the current position
            print("Current Position: (" + str(currentPos[0]) + "," + str(currentPos[1]) + ")")

        # if the bot is turned towards east
        elif self.orientation == 90:

            # move bot to the east
            self.canvas.move(self.bot, self.stepSize, 0)

            # update the orientation to east (+90 degrees)
            self.orientation += 90
            # increment stepSize
            self.stepSize += 10

            # update current positon
            currentPos = self.canvas.coords(self.bot)
            # print the current position
            print("Current Position: (" + str(currentPos[0]) + "," + str(currentPos[1]) + ")")

        # if the bot is turned towards south
        elif self.orientation == 180:

            # move bot to the south
            self.canvas.move(self.bot, 0, self.step)

            # update the orientation to east (+90 degrees)
            self.orientation += 90
            # increment stepSize
            self.stepSize += 10

            # update current positon
            currentPos = self.canvas.coords(self.bot)
            # print the current position
            print("Current Position: (" + str(currentPos[0]) + "," + str(currentPos[1]) + ")")

        # if the bot is turned towards west
        elif self.orientation == 270:

            # move bot to the west
            self.canvas.move(self.bot, -self.step, 0)

            # reset orientation to zero (north)
            self.orientation = 0
            # increment stepSize
            self.stepSize += 10

            # update current positon
            currentPos = self.canvas.coords(self.bot)
            # print the current position
            print("Current Position: (" + str(currentPos[0]) + "," + str(currentPos[1]) + ")")


# creates main window object
root = tk.Tk()

# pass TK window object to Bot class
robotApp = Bot(root)

# run main loop
root.mainloop()