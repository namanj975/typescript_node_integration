/**
 * *The never type is a type that contains no values. 
 * *Because of this, you cannot assign any value to a variable with a never type.
 * *Typically, you use the never type to represent the return type of a function that always throws an error.
 * * For example:
 */

 function raiseError(message: string = "") : never{
    throw new Error(message);
}



raiseError("error");
/**
 * following will raise an error because return type of function raiseError is never and we are expecting to be of type number.
 */
// let num :number = raiseError


/**
 * The return type of the following function is inferred to the never type because the below function returns the function of type never 
 */
function reject() { 
    return raiseError('Rejected');
 }

/**
 * *If you have a function expression that contains an indefinite loop, its return type is also the never type.
 * *As the function expression with an indefinite loop will never reurn any value.
 * *So no value is is returned.
 * *For example: 
 */
let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}
