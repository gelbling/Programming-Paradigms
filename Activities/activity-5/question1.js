// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity 5, Q1

function fib(n){

    if (n==0){
        return 0;
    }

    if (n==1){
        return 1;
    }

    fib1 = 0;
    fib2 = 1;
    for (let i = 2; i < n; i++){
        counter = fib1+fib2;
        fib1 = fib2;
        fib2 = counter;
    }

    return counter;

}

var counter = 0;

console.log(fib(0));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));