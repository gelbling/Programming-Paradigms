// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity H1, Q4

// reverses a string using split(), join() and reverse() methods
function reverseStr(text){
    return text.split('').reverse().join('');
}

function reversedSum(num1, num2) {
    /* your solution goes here */

    // cast both inputted numbers to strings
    // reverse and initialize both using the reverseStr()
    var op1 = reverseStr(num1.toString());
    var op2 = reverseStr(num2.toString());

    // cast the reversed values back to int and add both
    var sum = parseInt(op1) + parseInt(op2);

    // cast the sum into a string and reverse using reverseStr()
    // cast the reversed sum back into an int and return it
    return parseInt(reverseStr(sum.toString()));

}

console.log(reversedSum('24', 1))