/**
 * *Type aliases allow you to create a new name for an existing type. The following shows the syntax of the type alias:
 * * for example in below statement
*/

type chars = string;

/**
 * * The existing type can be any valid TypeScript type.
 */

 let message: chars; // same as string type


 message = "It can only accept string values";


 /**
  * *It’s useful to create type aliases for union types. For example:
  */

  type alphanumeric = string | number;
  let input: alphanumeric;
  input = 100; // valid
  input = 'Hi'; // valid

  /**
   * * The following will raise an error the input variable is of type alphanumeric and it can only accept string and number values.
   * * In below statement we are assingning the value of boolean type.So that's why following code will raise an error.
   */
//   input = false; // Compiler error

/**
 * *Use type aliases to define new names for existing types.
 */