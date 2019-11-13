/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    
    let str = someStr
    let reversedStr = ""

    for(let i = 0; i < str.length; i++){
        reversedStr = reversedStr + `${str[str.length - i - 1]}`
    }

    return reversedStr

}

console.log(reverseStr("Hello World"));

