

class rational_enum:

    def __init__(self, num):
        self.value = num
    
    def __iter__(self):
        self.numerator = 2
        self.denominator = 2
        self.counter = 0
        self.currState = 1
        return self

    def __next__(self):

        if self.counter < self.value:

            self.counter += 1

            if self.currState == 1:
                self.currState = 2
                return str(self.numerator) + '/' + str(self.denominator)
            elif self.currState == 2:
                self.numerator = 2
                self.denominator += 2
                self.currState = 4
                return str(self.numerator) + '/' + str(self.denominator)
            elif self.currState == 3:
                self.numerator += 2
                self.currState = 5
                return str(self.numerator) + '/' + str(self.denominator)
            elif self.currState == 4:
                self.numerator += 2
                self.denominator -= 2
                if self.denominator != 2:
                    self.currState = 4
                else:
                    self.currState = 3
                return str(self.numerator) + '/' + str(self.denominator)
            elif self.currState == 5:
                self.numerator -= 2
                self.denominator += 2
                if self.numerator != 2:
                    self.currState = 5
                else:
                    self.currState = 2
                return str(self.numerator) + '/' + str(self.denominator)
        
        else:
            raise StopIteration


for x in rational_enum(6):
	print(x)