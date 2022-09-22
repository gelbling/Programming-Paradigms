# Gabriel Amodeo Elbling
# Prog. Paradigms
# Activity HW3, Q3

matchHouses = (step) -> 
	# Your function implementation here

    # initialize a variable that stores the first step match acmount which is 6
    fistMatchNum    = 6

    # initialize a variable that stores the value of other steps that arent the first which is 5
    otherMatchNum   = 5
    
    # multiply the number of steps other than the first step by otherMatchNum whcih is 5
    # then add to that the amount of the first step which is 6
    # store this calculated value in a variable called totalMatches
    totalMatches    = (step - 1) * otherMatchNum + fistMatchNum

    # return the calculated total matches
    return totalMatches


console.log matchHouses 87