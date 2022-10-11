# Gabriel Amodeo Elbling
# Prog. Paradigms
# Activity 9, Q1

class fibonacci:
    def __init__(self, s):
        # initialize variables
        self.starting = s
        self.num1 = 0
        self.num2 = 1
        self.temp = None

    def __iter__(self): # creates the iterable object
        return self
    
    def __next__(self): # invoked at every iteration
        
        # calculate and update number pointers
        self.temp = self.num2
        self.num2 =  self.num1 + self.temp
        self.num1 = self.temp
        return self.num2

print(fibonacci(5))