/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n){
    //Type Checking
    if(isNaN(n)){
        throw "This is not a valid number"
    }
    if(n < 0){
        throw new Error('n must be greater than 0')
    }
    if((n === Infinity) || (n === -Infinity)){
        throw "n cannot be infinity"
    }

    //Base Cases
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    return fib(n-1) + fib(n-2)
}