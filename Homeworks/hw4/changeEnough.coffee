# Gabriel Amodeo Elbling
# Prog. Paradigms
# Activity HW4, Q1

changeEnough = (changeInPocket, amount) -> 

    # create total money variable
    # sum all coin amount * coin values read from array
    totalMoney = changeInPocket[0]* 0.25 + changeInPocket[1] * 0.10 + changeInPocket[2] * 0.05 + changeInPocket[3] * 0.01

    # if the totalMoney is greaterthan or equal to the amount, return true, you can but the item
    # if you can't guy it, return false
    if totalMoney>=amount
        return true
    else
        return false


# Keep the line below so we can test your code!
module.exports = { changeEnough }