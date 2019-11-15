/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr) {
  
    //Exception Handling
    if(typeof(someStr) !== 'string'){
        throw new Error("This input is not a string, try again.")
    }
    if(someStr.length === 0){
        throw new Error("This input is empty, try again.")
    }
 
    
    
    let str = someStr.toLowerCase();
    let firstHalf;
    let secondHalf;
    let secondHalfReversed = "";
  
    //If Even Numbered Word
    if(Number.isInteger((str.length)/2)){ 

        console.log("This word contains an even amount of letters...");
        
        firstHalf = str.slice(0, str.length/2)
        secondHalf  = str.slice(str.length/2, str.length)
        
        //Reverse secondHalf
        for(let i = 0; i < secondHalf.length; i++){
            secondHalfReversed = secondHalfReversed + `${secondHalf[secondHalf.length - i - 1]}`
        }

        console.log("firstHalf: " + firstHalf);
        console.log("secondHalfReversed: " + secondHalfReversed);

        //Compare firstHalf to secondHalfReversed
        if(firstHalf === secondHalfReversed){
            return true
        } else {
            return false
        }
        
    //If Odd Numbered Word
    } else { 

        console.log("This word contains an off amount of letters...");
        

        firstHalf = str.slice(0, str.length/2 + 0.5)
        secondHalf = str.slice(str.length/2 - 0.5)
        
        //Reverse secondHalf
        for(let i = 0; i < secondHalf.length; i++){
             secondHalfReversed = secondHalfReversed + `${secondHalf[secondHalf.length - i - 1]}`
        }

        console.log("firstHalf: " + firstHalf);
        console.log("secondHalfReversed: " + secondHalfReversed);

        //Compare firstHalf to secondHalfReversed
        if(firstHalf === secondHalfReversed){
            return true
        } else {
            return false
        }

    }

}

