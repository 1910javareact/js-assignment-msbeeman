/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
****Clarification: Just get rid of the element****
*/
function spliceElement(someArr, index) {
    
    //Exception Handling
    if(Array.isArray(someArr) === false){
        throw new Error("This is not a valid input, input must be an array, try again.")
    }
    if(isNaN(index)){
        throw new Error("This is not a valid number, try again.")
    }
    if(index < 0){
        throw new Error("This is not a valid index, index must be 0 or greater.")
    }
    if((Number.isInteger(index) === false)){
        throw new Error("This is not a valid index, index must be an integer.")
    }
    if((index === Infinity) || (index === -Infinity)){
        throw new Error("This is not a valid index, index cannot be infinity.")
    }


    let arr = [];

    //Add the elements up to but not including the index we want removed
    for(let i = 0; i < index; i++){
        arr.push(someArr[i])
    }

    //Add the elements starting after the index we want removed
    for(let j = index + 1; j < someArr.length; j++){
        arr.push(someArr[j])
    }

    return arr
}