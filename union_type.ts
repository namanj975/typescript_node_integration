/**
 * *A TypeScript union type allows you to store a value of one or serveral types in a variable.
 */

/**
 * *For example, the following variable is of type number or string
 */

 let result: number | string;
 result = 10; // OK
 result = 'Hi'; // also OK

 /**
  * *The following will raise an error because the result variable can only be of type number or string. This
  * *And in below statement we are assigning the boolean value.
  */
//  result = false;

/**
 * *A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean
 * * For example as described in below statement 
*/


let flag : number | string | boolean = true;
flag = 0;
flag = "success"

/**
 * * now the following will raise an error because we are assigning the object to the variable having one of the type number, string and boolean.
 */
// flag = {}

