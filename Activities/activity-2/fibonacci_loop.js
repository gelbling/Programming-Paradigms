// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity 2, Q2

function fibonacci(num) {
    var prev = 0;
    var curr = 1;
    var count = 1;
    var next;

    while (count < num){
        next = prev + curr;
        prev = curr;
        curr = next;
        count = count + 1;
    }

    return curr
}

console.log(fibonacci(13))