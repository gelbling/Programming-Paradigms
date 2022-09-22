// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity H1, Q3


function computeEnumeration(termPositions) {
    /* your solution goes here */

    // array which will store computed ouputs
    var result = [];

    // loop through termPositions inputted array
    for (let i = 0; i < termPositions.length; i++){

        // save the current value
        var findVal = termPositions[i];

        // add null to the result array if value is <1
        if (findVal < 1){
            result.push(null);
            continue;
        }

        // initialize counter variable to zero
        var counter = 0;

        // initialize starting values, which are always 2
        var numerator = 2
        var denominator = 2

        // currState stores what action needs to be taken
        // as per the values labeled below:
        // 1 -> initial
        // 2 -> go right
        // 3 -> go down
        // 4 -> go diag down
        // 5 -> go diag up
        var currState = 1

        // uses counter to loop all the way to the desired value
        while (counter < findVal){

            // switch statement is used to execute and change
            // the current states through the currState variable
            switch(currState) {
                // initial state goes directly to the right (state 2)
                case 1:
                    currState = 2;
                    break;

                // go right adds two to denominator and maintains the 
                // numerator at the value of 2, then the state changes to
                // diagonally down (state 4)
                case 2:
                    numerator = 2;
                    denominator = denominator + 2;
                    currState = 4;
                    break;

                // go down adds two to the numerator and changes the 
                // state to go diagonally up (state 5)
                case 3:
                    numerator = numerator + 2;
                    currState = 5;
                    break;

                // go diag down adds two to numerator and subtracts two
                // from denominator, if the denominator is not two it keeps
                // the state diag down (state 4), when the denominator is 2
                // the state changes to go down (state 3)
                case 4:
                    numerator = numerator + 2;
                    denominator = denominator - 2;
                    if (denominator != 2){
                        currState = 4;
                    }
                    else {
                        currState = 3;
                    }
                    break;

                // go diag up subtracts 2 from the numerator and adds
                // 2 to the denominator, if the numerator is not 2 it maintains
                // the state at diag down (state 5), when the numerator is 2,
                // the state is changed to go right (state 2)
                case 5:
                    numerator = numerator - 2;
                    denominator = denominator + 2;
                    if (numerator != 2){
                        currState = 5;
                    }
                    else {
                        currState = 2;
                    }
                    break;

            }
            // increment counter
            counter++;
        }

        // add current numerator and denominator to result array
        // using string concatenation
        result.push(numerator + '/' + denominator);

    }

    // return the result array
    return result;

}

let termPositions = [3, 6, -1, 108]
console.log(computeEnumeration(termPositions));