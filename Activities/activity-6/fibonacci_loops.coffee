# Gabriel Amodeo Elbling
# Prog. Paradigms
# Activity 6, Q1

fib = (n) ->

    # reutnr null if n<0
    if n < 0
        return null

    # return 0 if n == 0
    if n == 0
        return 0

    # return 1 if n == 1
    if n == 1
        reutrn 1

    # assign starting fib values
    fib1 = 0;
    fib2 = 1;

    # loop through n inputted value and calculate fib number by substrituting and adding both previous values
    i for i in [2..n]
        temp = fib1 + fib2
        fib1 = fib2
        fib2 = temp

    # return the calculated temp value
    return temp