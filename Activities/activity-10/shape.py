# Gabriel Amodeo Elbling
# Prog. Paradigms
# Activity 10, Q1

# import tkinter
from tkinter import Canvas, Tk

# initialize tkinter object
window = Tk()

# initialize shape width variables
squareWidth = 15
squareHeight = 15

# initialize screen dimension variables
windowWidth = 400
windowHeight = 300


# initialize canvas and pass in tkinter object and screen dimensions
window = Canvas(window, windowWidth, windowHeight)
window.pack()

# Create a rectangle in the window at its center with a blue fill
leftPoint        = (windowWidth / 2)  - squareWidth
leftBottomPoint  = (windowHeight / 2) - squareWidth
rightPoint       = (windowWidth / 2)  + squareHeight
rightBottomPoint = (windowHeight / 2) + squareHeight

# create rectagle on window with specific coordinates and fill in with color blue
window.create_rectangle(leftPoint, leftBottomPoint, rightPoint, rightBottomPoint, fill = "blue")

# call the tkinter main loop
window.mainloop()