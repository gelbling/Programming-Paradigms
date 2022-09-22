// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity H1, Q2

function findMaxConsecutiveOnes(nums) {
    /* your solution goes here */

    // initialize variables
    var currOnes = 0;
    var maxOnes = 0;
    var prev = false;

    // loop through array
    for (let i = 0; i < nums.length-1; i++){
    
        // check if previous value is 1
        if (i > 0 && nums[i-1] == 1){
            prev = true;
        }

        // check if current value is 1
        if (nums[i] == 1){

            // if the previous value is 1 and the next 
            // value is not 1, add to the current counter
            // because it is still consecutive
            if (prev == true && nums[i+1] != 1){
                currOnes = currOnes + 1;
            }

            // if the next value is 1, add to the counter
            // if the next value is the last in the array
            // add two to the counter to count both current
            // and last 1's
            if (nums[i+1] == 1){
                if (i+1 == nums.length-1){
                    currOnes = currOnes + 2;
                }
                else{
                    currOnes = currOnes + 1;
                }
            }

            // save the max of the current consecutive ones counter
            if (currOnes > maxOnes){
                maxOnes = currOnes;
            }

        }
        // reset counter if the current value if not 1
        else{
            currOnes = 0
        }

    }

    // returns highest amount of consecutive 1's
    return maxOnes
}

