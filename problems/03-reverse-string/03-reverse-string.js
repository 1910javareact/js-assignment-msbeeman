/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

function reverseStr(someStr) {
    
    //Exception Handling
    if(typeof(someStr) !== 'string'){
        throw new Error("This input is not a string, try again.")
    }
    if(someStr.length === 0){
        throw new Error("This input is empty, try again.")
    }


    let str = someStr
    let reversedStr = ""

    for(let i = 0; i < str.length; i++){
        reversedStr = reversedStr + `${str[str.length - i - 1]}`
    }

    return reversedStr

}

