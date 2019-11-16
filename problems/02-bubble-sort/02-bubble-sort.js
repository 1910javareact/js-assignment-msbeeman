/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

//Implemented using same bubblesort O(n^2) logic in Java from class
function bubbleSort(numArray) {

    //Exceptions
     if(Array.isArray(numArray) === false){
         throw new Error("This input is not an array, try again.")
     }
     for(let i = 0; i < numArray.length; i++){
         if(isNaN(numArray[i]) === true){
             throw new Error(`At least the ${i}th element of your array is not a number, try again with an array containing solely numbers.`)
         }
     }

    //Function
    arr = [...numArray]
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}