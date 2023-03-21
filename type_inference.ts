/**
 * *In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation.
 * * For example, in this code
 */

 let x = 3; // here the type of x is inferred by typescript compiler as number in this case we haven't declared the type explicitly.

 // The Following will raise an error beacuse type of x is already inferred as number from above

//  x  = "naman"


/**
 * In below statement the type of x1 is already inferred as a typed array of numbers and string.
 */
let x1 = [0, 1, null,"hello"];
x1 = [1,2,null]