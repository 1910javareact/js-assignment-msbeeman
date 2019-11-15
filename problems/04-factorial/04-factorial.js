/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  
    //Exceptions
    if(isNaN(sumNum)){
        throw new Error("This is not a valid number")
    }
    if(sumNum < 0){
        throw new Error("Input must be greater than 0")
    }
    if((sumNum === Infinity) || (sumNum === -Infinity)){
        throw new Error("Input cannot be infinity")
    }
    if((Number.isInteger(sumNum) === false)){
        throw new Error("Please enter in an integer.")
    }


    //Base Case
    if(sumNum === 0){
        return 1
    }
    
    return sumNum*factorial(sumNum-1)
}
