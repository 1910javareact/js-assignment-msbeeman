/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n){
    //Type Checking
    if(isNaN(n)){
        throw new Error("This is not a valid number")
    }
    if(n < 0){
        throw new Error('n must be greater than 0')
    }
    if((n === Infinity) || (n === -Infinity)){
        throw new Error("n cannot be infinity")
    }
    if((Number.isInteger(n) === false)){
        throw new Error("Please enter in an integer.")
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