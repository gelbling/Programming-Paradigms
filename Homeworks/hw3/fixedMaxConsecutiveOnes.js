// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity HW3, Q2.3

function maxConsecutiveOnes(nums) {
    let max = 0;
    let count = 0;
    for(let i = 0; i < nums.length ; i++){ // changed 'nums.length - 1' to 'nums.length'
        if(nums[i] === 1) count++;
        if(count > max) max = count;
        if (i != nums.length){ if(nums[i+1] === 0) count = 0; } // added the 'if (i != nums.length)' if statement
    }    
    return max;
}