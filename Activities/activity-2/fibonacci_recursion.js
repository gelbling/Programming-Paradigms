// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity 2, Q1

function fibonacci(num) {
    if (num <= 1){
      return 1;
    }
  
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(13))