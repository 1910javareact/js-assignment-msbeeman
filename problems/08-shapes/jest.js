let height = 5;
let character = "*";
let charArray = []
let charCounterUp = 1;
let emptyStr = ""
let charSliceCounter = 1;
let emptySpaceCounter = Math.ceil(height/2);

//Create the row of empty space 
for(let i = 0; i < height; i++){
    emptyStr = emptyStr + " "  
}

//Create the row of characters, length being height
for(let i = 0; i < height; i++){
    charArray = charArray + character    
}
//Iterate and create the top half of the diamond
for(let j = 0; j < Math.ceil(height/2); j++){
    console.log(emptyStr.slice(0, emptySpaceCounter) + charArray.slice(0, charSliceCounter));
    charSliceCounter += 2
    emptySpaceCounter --
}

// console.log(emptyStr.slice(0, 3) + charArray.slice(0,1));
// console.log(emptyStr.slice(0, 2) + charArray.slice(0,3));
// console.log(emptyStr.slice(0, 1) + charArray.slice(0,5));

console.log();
