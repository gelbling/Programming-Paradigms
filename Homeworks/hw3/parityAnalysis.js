// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity HW3, Q1.1

function parityAnalysis(n){

    // split n into list of each digit
    let partialNum      = (n+"").split("");

    // initialize a sum variable for the digits of n
    var partialNumSum   = 0;

    // loops through array of nigits and add all of them
    for (let i = 0; i<partialNum.length; i++){
        // add and convert string elemets to ints
        partialNumSum += parseInt(partialNum[i]);
    }

    // check if inputted number is even
    if (n % 2 == 0){
        // check if the sum of the digits is even as well, return true if so
        if (partialNumSum % 2 == 0){
            return true;
        }
    }

    // check if inputted number is odd
    if (n % 2 != 0){
        // check if the sum of the digits is odd as well, return true if so
        if (partialNumSum % 2 != 0){
            return true;
        }
    }

    // if none of the above return statements are triggered,
    // then return false, meaning the number has no parity
    return false;

}

exports.parityAnalysis = parityAnalysis;