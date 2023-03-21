
/**
 * * binary value declaration and initialization
 */

 let bin = 0b100;
 let anotherBin: number = 0B010;

/**
 * * octal value declaration and initialization
 */
let octal: number = 0o10;

/**
 * * hexadecimal value declaration and initialization
 */

 let hexadecimal: number = 0XA;

/**
 * * bigint value declaration and initialization
 */
 let big: bigint = BigInt(9007199254740991)

 let big2: bigint = 9007199254740991n;

 let number1 = () => 4;

 /**
  * * The following will raise an error because the type of variable number1 is already infered as a function whose return type is number, in above statement by typescript compiler. 
  * * So assigning the string value will raise error
 */
//  number1 = "g"