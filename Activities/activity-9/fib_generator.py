# Gabriel Amodeo Elbling
# Prog. Paradigms
# Activity 9, Q2

def fibonacci(n):

    # if n is zero return 0
    if n == 0:
        yield n

    # initialize number pointers
    num1 = 0
    num2 = 1

    # loop through n
    for i in range(0, n):
            # calculate and update number pointers
            temp = num2
            num2 =  num1 + temp
            num1 = temp
            # yield latest calculated number
            yield num2

fib = fibonacci(5)