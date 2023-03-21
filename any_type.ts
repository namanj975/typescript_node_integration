/**
 * * The any type provides you with a way to work with existing JavaScript codebase.
 * * It allows you to gradually opt-in and opt-out of type checking during compilation. 
 * * Therefore, you can use the any type for migrating a JavaScript project over to TypeScript.
 * * The any type allows you to assign a value of any type to a variable
 */

/**
 * * any : Implicit typing
 * 
 * *If you declare a variable without specifying a type, TypeScript assumes that you use the any type. 
 * *This feature is called type inference. 
 * *Basically, TypeScript guesses the type of the variable.
 * *As shown in the example below 
 * * In below example, TypeScript infers the type for you. This practice is called implicit typing.
 */

 let result;

 let obj: object = {a:23,b:3}
 
 /**
  * * the following will raise an error as the type of obj variable is object .
  * * if the type of obj variable is any then following will not raise error.
  */
//  console.log(obj.a);
 
/**
 * * The following will not raise an error because in below case the type of val is any.
 * *In example below, the TypeScript compiler doesn’t issue any warning even the willExist() method doesn’t exist at compile time because the willExist() method might available at runtime.
 * *However, if you change the type of the val variable to object, the TypeScript compiler will issue an error:
 */
let val: any;
val = 10.123;
console.log("b",val.toFixed(1));
val.willExist(); 


let val2: object;
val2 = {s:34};
/**
 * *Now in following case TypeScript compiler will issue an error:
 * *As the type of val2 is object . so while accessing the own existing properties of val2 ,An error will be raised by typescript compiler
 * * If the type of val2 was any then no error will be raised in following case.
*/
// console.log("ww",val2.s);

/**
 * * Summary 
 * *The TypeScript any type allows you to store a value of any type. It instructs the compiler to skip type checking.
 * *Use the any type to store a value that you don’t actually know its type at the compile-time or when you migrate a JavaScript project over to a TypeScript project.

 */

export default 12