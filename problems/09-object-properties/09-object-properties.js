/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

 function objectProperties(someObj) {

        if(typeof(someObj) !== 'object'){
            throw new Error("The input is not an object, try again.")
        }

        for(let i = 0; i < Object.keys(someObj).length; i++){
            console.log(`Key ${i}: ${Object.keys(someObj)[i]} | Value: ${Object.values(someObj)[i]}`);
     }

}