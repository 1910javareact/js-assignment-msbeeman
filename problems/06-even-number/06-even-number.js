/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {

    //Exception Handling
    if(isNaN(someNum) === true){
        throw new Error("The input did not contain a valid number, try again.")
    }
    if(typeof(someNum) === 'string'){
        throw new Error("The input is not a number, try again.")
    }
    if((someNum === Infinity) || (someNum === -Infinity)){
        throw new Error("Infiniti is not a number, try again.")
    }
    if(Number.isInteger(someNum.toPrecision(100)) === false){
        throw new Error("Please enter a whole number, try again.")
    }
    

    let num = someNum

    if(Number.isInteger(num / 2)){
        return true
    } else {
        return false
    }

}