/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.*****************
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {

  //Exceptions
  if(shape !== "square" && shape !== "Square" && shape !== "triangle" && shape !== "Triangle" && shape !== "diamond" && shape !== "Diamond"){
    throw new Error("Not a valid shape. Shape's can only be a square, triangle, or diamond. Try again.")
  }
  if(Number.isInteger(height) === false){
    throw new Error("Not an integer, try again.")
  }
  if(Number.isInteger(height/2) === true){
    throw new Error("Height input must be odd, try again.")
  }
  if(character.constructor !== String){
    throw new Error("Not a string, try again.")
  }
  if(character.length !== 1){
    throw new Error("Input can only be a string of length 1, try again.")
  }


  //Functions
  let charArray = ""

  switch (shape) {
    case "square": 
    case "Square": {

      //Create the row
      for(let i = 0; i < height; i++){
        charArray = charArray + character
      }

      //Output each row
      for(let j = 0; j < height; j++){
        console.log(charArray);
      }
      
      return  ""

    }
    case "triangle":
    case "Triangle": {

      
      for(let i = 0; i < height; i++){
        charArray = charArray + character
        console.log(charArray);
       }

       return ""

    }
    case "diamond":
    case "Diamond": {

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

      //Iterate and create the bottom half of the diamond
      charSliceCounter = charSliceCounter - 2
      emptySpaceCounter = emptySpaceCounter + 1
      for(let i = Math.ceil(height/2); i < height; i++){
          charSliceCounter -= 2
          emptySpaceCounter ++
          console.log(emptyStr.slice(0, emptySpaceCounter) + charArray.slice(0, charSliceCounter));
      }   

      return ""
    }
  }
}


