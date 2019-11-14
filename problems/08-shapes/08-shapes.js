/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
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
    throw "Not a valid shape. Shape's can only be a square, triangle, or diamond. Try again."
  }

  if(Number.isInteger(height) === false){
    throw "Not an integer, try again."
  }

  if(character.constructor !== String){
    throw "Not a string, try again."
  }

  if(character.length !== 1){
    throw "Input can only be a string of length 1, try again."
  }

  //Functions
  let charArray = []
  let logArray = []

  switch (shape) {
    case "square": 
    case "Square": {
      for(let i = 0; i < height; i++){
        charArray.push(character)
      }
      for(let j = 0; j < height; j++){
        logArray.push(console.log(`${charArray}`))
      }
      
      break;
    }
    case "triangle":
    case "Triangle": {
      break;
    }
    case "diamond":
    case "Diamond": {
      break;
    }
  }
}


console.log(printShape("Square", 3, "%"));


