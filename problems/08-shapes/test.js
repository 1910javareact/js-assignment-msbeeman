let height = 3;
let character = "$";
let charArray = ""
let logArray = []

//Create the row
for(let i = 0; i < height; i++){
    charArray = charArray + character  
}
//Output each row
for(let j = 0; j < height; j++){
    console.log(charArray);
}
  
console.log("========================================================");

height = 5;
character = "*";
charArray = []
charCounterUp = 1;

for(let i = 0; i < height; i++){
    charArray = charArray + character    
}

for(let j = 0; j < Math.ceil(height/2); j++){
    console.log(charArray.slice[charCounterUp]);
    // console.log(`Counter Before Pass ${j}: ${charCounterUp}`);
    charCounterUp += 2
    // console.log(`Counter After Pass ${j}: ${charCounterUp}`);
}

