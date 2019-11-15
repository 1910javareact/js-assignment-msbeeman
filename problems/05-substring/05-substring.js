/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    //Exception Handling
    if(typeof(someStr) !== 'string'){
        throw new Error("This input is not a string, try again.")
    }
    if(someStr.length === 0){
        throw new Error("This input is empty, try again.")
    }
    if(isNaN(startIndex)){
        throw new Error("This is not a valid number, try again.")
    }
    if(isNaN(endIndex)){
        throw new Error("This is not a valid number, try again.")
    }
    if(startIndex < 0){
        throw new Error('This is not a valid index, index must be 0 or greater')
    }
    if(endIndex < 0){
         throw new Error('This is not a valid index, index must be 0 or greater')
    }
    if((Number.isInteger(startIndex) === false)){
        throw new Error("This is not a valid index, index must be an integer.")
    }
    if((Number.isInteger(endIndex) === false)){
    throw new Error("This is not a valid index, index must be an integer.")
    }
    if((startIndex === Infinity) || (startIndex === -Infinity)){
        throw new Error("This is not a valid index, index cannot be infinity.")
    }
    if((endIndex === Infinity) || (endIndex === -Infinity)){
        throw new Error("This is not a valid index, index cannot be infinity.")
    }


    let returnString = ""; 

    for(i = startIndex; i < endIndex; i++){
        returnString = returnString + someStr[i]
    }

    return returnString
    
}