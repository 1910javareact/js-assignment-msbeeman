/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr) {
  
    let str = someStr;
    let firstHalf;
    let secondHalf;
    let secondHalfReversed;
  
    if(Number.isInteger((str.length - 1)/2)){ //If Even Numbered Word
        firstHalf = str.slice(0, str.length/2)
        secondHalf  = str.slice(str.length/2, str.length)
        //secondHalfReversed = rs.reversedStr(secondHalf)

        if(firstHalf === secondHalf){
            return true
        } else {
            return false
        }

    } else { //If Odd Numbered Word
        firstHalf = str.slice(0, str.length/2 + 0.5)
        secondHalf = str.slice(str.length/2 - 0.5)
        //secondHalfReversed = rs.reversedStr(secondHalf)

        if(firstHalf === secondHalf){
            return true
        } else {
            return false
        }
    }

}


isPalindrome("Racecar") //Even Numbered Word
isPalindrome("Radar") //Odd Numbered Word
isPalindrome("") //No Word 